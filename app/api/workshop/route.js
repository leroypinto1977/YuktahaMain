import { connectToDatabase } from "@/lib/mongodb";
import Workshop from "@/models/WorkshopDetails";

export async function POST(req) {
  await connectToDatabase();

  try {
    const body = await req.json(); // Next.js App Router requires `req.json()`
    const workshop = await Workshop.create(body);
    return Response.json({ success: true, data: workshop }, { status: 201 });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}

export async function GET() {
  await connectToDatabase();

  try {
    const workshops = await Workshop.find(
      {},
      "name dept short_desc workshopid open outer_Img"
    );
    return Response.json(workshops, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch workshops" },
      { status: 500 }
    );
  }
}
