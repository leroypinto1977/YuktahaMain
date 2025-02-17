import UserProfile from "@/components/UserProfile";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Check } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const Profile = async () => {
  const { getUser, isAuthenticated } = getKindeServerSession();
  console.log("Home Page Started");
  const user = await getUser();
  console.log(user);

  if (user !== null && isAuthenticated) {
    return (
      <div className="w-full h-full flex items-center justify-center p-10">
        <UserProfile user={user} />
      </div>
    );
  } else {
    redirect("/");
  }
};

export default Profile;
