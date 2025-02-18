// import createTransaction from "@/app/api/transaction/createTransaction/route.js";
// import UserDetails from "@/models/UserDetails";
// import Workshop from "@/models/WorkshopDetails";
// import mongoose from "mongoose";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   const { userDetails, workshopId } = req.body;

//   if (!userDetails || !workshopId) {
//     return res.status(400).json({ message: "Missing required fields" });
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI);

//     const workshop = await Workshop.findOne({ workshopid: workshopId });

//     if (!workshop || workshop.availability <= 0) {
//       return res.status(400).json({ message: "Workshop is full or not found" });
//     }

//     // Create transaction
//     const transaction = await createTransaction({
//       yuktahaId: userDetails.yuktahaId,
//       firstName: userDetails.firstName,
//       phoneNumber: userDetails.phoneNumber,
//       fees: workshop.fees,
//       event_type: "workshop",
//       eventId: workshop.workshopid,
//       email: userDetails.email,
//     });

//     // Update user details
//     await UserDetails.findOneAndUpdate(
//       { email: userDetails.email },
//       {
//         $push: {
//           workshop: {
//             name: workshop.name,
//             workshopid: workshop.workshopid,
//             outer_Img: workshop.outer_Img,
//             paid: false, // Assuming payment is not done yet
//           },
//         },
//         $inc: { workshopsRegistered: 1 },
//       }
//     );

//     // Update workshop details
//     await Workshop.findOneAndUpdate(
//       { workshopid: workshopId },
//       {
//         $push: {
//           participants: {
//             yuktahaId: userDetails.yuktahaId,
//             firstName: userDetails.firstName,
//             email: userDetails.email,
//             phoneNumber: userDetails.phoneNumber,
//             college: userDetails.college,
//           },
//         },
//         $inc: { count: 1, availability: -1 },
//       }
//     );

//     res
//       .status(200)
//       .json({ message: "Workshop registered successfully", transaction });
//   } catch (error) {
//     console.error("Error registering for workshop:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

// app/api/workshop/registerWorkshop/route.js

// import { connectToDatabase } from "@/lib/mongodb";
// // Adjust this import based on your DB connection file
// import UserDetails from "@/models/UserDetails";
// // Adjust this import based on your model location
// import Workshop from "@/models/WorkshopDetails";
// import { NextResponse } from "next/server";

// // Assuming you have a Workshop model

// export async function POST(request) {
//   try {
//     // Connect to database
//     await connectToDatabase();

//     // Parse the request body
//     const body = await request.json();

//     if (!body.userDetails || !body.workshopId) {
//       return NextResponse.json(
//         { message: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const { userDetails, workshopId } = body;

//     // Find the workshop
//     const workshop = await Workshop.findOne({ workshopid: workshopId });
//     if (!workshop) {
//       return NextResponse.json(
//         { message: "Workshop not found" },
//         { status: 404 }
//       );
//     }

//     // Find user and update their workshop registration
//     const user = await UserDetails.findOne({ email: userDetails.email });
//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     // Check if user is already registered for this workshop
//     const isAlreadyRegistered = user.workshop.some(
//       (w) => w.workshopid === workshopId
//     );
//     if (isAlreadyRegistered) {
//       return NextResponse.json(
//         { message: "Already registered for this workshop" },
//         { status: 400 }
//       );
//     }

//     // Create new workshop registration
//     const newWorkshopRegistration = {
//       name: workshop.name,
//       workshopid: workshopId,
//       outer_Img: workshop.outer_Img,
//       paid: workshop.paid,
//     };

//     // Update user document
//     await UserDetails.findOneAndUpdate(
//       { email: userDetails.email },
//       {
//         $push: { workshop: newWorkshopRegistration },
//         $inc: { workshopsRegistered: 1 },
//       },
//       { new: true }
//     );

//     return NextResponse.json(
//       {
//         message: "Workshop registered successfully",
//         workshop: newWorkshopRegistration,
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Workshop registration error:", error);
//     return NextResponse.json(
//       { message: "Internal server error", error: error.message },
//       { status: 500 }
//     );
//   }
// }

// app/api/workshop/registerWorkshop/route.js

import { connectToDatabase } from "@/lib/mongodb";
import UserDetails from "@/models/UserDetails";
import Workshop from "@/models/WorkshopDetails";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to database
    await connectToDatabase();
    console.log("Using existing database connection");

    // Parse the request body
    const body = await request.json();

    if (!body.userDetails || !body.workshopId) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { userDetails, workshopId } = body;

    // Find the workshop
    const workshop = await Workshop.findOne({ workshopid: workshopId });
    if (!workshop) {
      return NextResponse.json(
        { message: "Workshop not found" },
        { status: 404 }
      );
    }

    // Find user
    const user = await UserDetails.findOne({ email: userDetails.email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if user is already registered for this workshop
    const isAlreadyRegistered = user.workshop.some(
      (w) => w.workshopid === workshopId
    );
    if (isAlreadyRegistered) {
      return NextResponse.json(
        { message: "Already registered for this workshop" },
        { status: 400 }
      );
    }

    // Create new workshop registration
    const newWorkshopRegistration = {
      name: workshop.name,
      workshopid: workshopId,
      outer_Img: workshop.outer_Img,
      paid: true,
    };

    // Convert workshopsRegistered to number if it's a string
    if (typeof user.workshopsRegistered === "string") {
      await UserDetails.updateOne(
        { email: userDetails.email },
        {
          $set: {
            workshopsRegistered: parseInt(user.workshopsRegistered) || 0,
          },
        }
      );
    }

    // Update user document
    const updatedUser = await UserDetails.findOneAndUpdate(
      { email: userDetails.email },
      {
        $push: { workshop: newWorkshopRegistration },
        $inc: { workshopsRegistered: 1 },
      },
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("Failed to update user document");
    }

    return NextResponse.json(
      {
        message: "Workshop registered successfully",
        workshop: newWorkshopRegistration,
        workshopsRegistered: updatedUser.workshopsRegistered,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Workshop registration error:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
