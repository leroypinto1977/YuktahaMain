import { connectToDatabase } from "@/lib/mongodb";
import { NTEvent } from "@/models/EventDetails";
import { TEvent } from "@/models/EventDetails";
import { NextResponse } from "next/server";

// ntevents/route.js
export async function POST(req) {
  await connectToDatabase();
  try {
    const body = await req.json();
    const event = await NTEvent.create(body);
    return Response.json({ success: true, data: event }, { status: 201 });
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
    const events = await NTEvent.find(
      {},
      "name dept short_desc eventid open outer_Img"
    );
    return Response.json(events, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
