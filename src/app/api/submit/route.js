export async function POST(req) {
  try {
    const data = await req.json();

    console.log(data)

    return new Response(
      JSON.stringify({ status: "ok" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Something went wrong!" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
