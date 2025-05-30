import client from "../../../lib/mongodb";

const calculateResult = (answers) => {
  const traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  Object.values(answers).forEach((item) => {
    const letter = item.selectedAnswer.type;
    traits[letter]++;
  });

  return (
    (traits.E >= traits.I ? "E" : "I") +
    (traits.S >= traits.N ? "S" : "N") +
    (traits.T >= traits.F ? "T" : "F") +
    (traits.J >= traits.P ? "J" : "P")
  );
};

export async function GET() {
  try {
    await client.connect();
    const db = client.db("personality-test");
    const collection = db.collection("answers");

    const answersPipeline = [
      { $unwind: "$answers" },
      {
        $group: {
          _id: { questionId: "$answers.id", selectedKey: "$answers.selectedKey" },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: "$_id.questionId",
          total: { $sum: "$count" },
          choices: {
            $push: { key: "$_id.selectedKey", count: "$count" },
          },
        },
      },
      {
        $project: {
          _id: 0,
          questionId: "$_id",
          stats: {
            $map: {
              input: "$choices",
              as: "choice",
              in: {
                key: "$$choice.key",
                count: "$$choice.count",
                percent: {
                  $round: [
                    {
                      $multiply: [
                        { $divide: ["$$choice.count", "$total"] },
                        100,
                      ],
                    },
                    1,
                  ],
                },
              },
            },
          },
        },
      },
    ];

    const questionStats = await collection.aggregate(answersPipeline).toArray();

    const cursor = collection.find({}, { projection: { answers: 1 } });
    const typeTally = {};

    for await (const doc of cursor) {
      const type = calculateResult(doc.answers);
      typeTally[type] = (typeTally[type] || 0) + 1;
    }

    const typeCounts = Object.entries(typeTally)
      .map(([type, count]) => ({ type, count }))
      .sort((a, b) => b.count - a.count);

    return new Response(
      JSON.stringify({
        status: "ok",
        data: {
          questions: questionStats,
          types: typeCounts,
        },
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("Error computing stats:", err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
