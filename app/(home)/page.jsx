import UserDetails from "../../models/UserDetails";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LoadingSequence from "@/components/LoadingSequence";
import Navbar from "@/components/Navbar";
import { connectToDatabase } from "@/lib/mongodb";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { setCookie } from "cookies-next";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  console.log("Home Page Started");
  const user = await getUser();
  console.log(user);

  await connectToDatabase();

  console.log("DB Connection Successful");

  if (user) {
    console.log("User Found");
    const existingUser = await UserDetails.findOne({ email: user.email });
    if (!existingUser) {
      console.log("Existing User Found New User");
      setCookie("new-user", JSON.stringify(user), {
        path: "/",
        headers: { "Set-Cookie": "new-user" },
      });

      redirect("/new-user");
    }
  }

  return (
    <>
      <LoadingSequence>
        {/* <Navbar />
        <div className="relative w-full h-screen">
          <Hero />
        </div> */}
      </LoadingSequence>
    </>
  );
}
