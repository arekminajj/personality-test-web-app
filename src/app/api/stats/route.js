import client from "../../../lib/mongodb";

export async function GET(req) {
  try {
    await client.connect();
    const db = client.db("personality-test");
    const collection = db.collection("answers");

    const pipeline = [
      { $unwind: "$answers" },
      {
        $group: {
          _id: {
            questionId: "$answers.id",
            selectedKey: "$answers.selectedKey"
          },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: "$_id.questionId",
          total: { $sum: "$count" },
          choices: {
            $push: {
              key: "$_id.selectedKey",
              count: "$count"
            }
          }
        }
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
                    { $multiply: [{ $divide: ["$$choice.count", "$total"] }, 100] },
                    1
                  ]
                }
              }
            }
          }
        }
      }
    ];

    const aggCursor = collection.aggregate(pipeline);
    const stats = await aggCursor.toArray();

    return new Response(
      JSON.stringify({ status: "ok", data: stats }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error computing stats:", error);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
}
