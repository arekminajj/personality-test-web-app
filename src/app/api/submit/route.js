import client from "../../../../lib/mongodb";

function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export async function POST(req) {
  try {
    const data = await req.json();

    const submissionId = makeid(10);
    await client.connect();
    const db = client.db("personality-test");
    const collection = db.collection("answers");

    const document = {
      submissionId,
      answers: data,
      timestamp: new Date(),
    };

    await collection.insertOne(document);

    console.log("Data saved to database", document);

    return new Response(
      JSON.stringify({ status: "ok", submissionId: document.submissionId }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error saving data:", error);

    return new Response(
      JSON.stringify({ error: "Something went wrong!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  } 
}
