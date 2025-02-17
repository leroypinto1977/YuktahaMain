// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import * as React from "react";

// const profile = () => {
//   return (
//     <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Create project</CardTitle>
//         <CardDescription>Deploy your new project in one-click.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form>
//           <div className="grid w-full items-center gap-4">
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="name">Name</Label>
//               <Input id="name" placeholder="Name of your project" />
//             </div>
//             <div className="flex flex-col space-y-1.5">
//               <Label htmlFor="framework">Framework</Label>
//               <Select>
//                 <SelectTrigger id="framework">
//                   <SelectValue placeholder="Select" />
//                 </SelectTrigger>
//                 <SelectContent position="popper">
//                   <SelectItem value="next">Next.js</SelectItem>
//                   <SelectItem value="sveltekit">SvelteKit</SelectItem>
//                   <SelectItem value="astro">Astro</SelectItem>
//                   <SelectItem value="nuxt">Nuxt.js</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </form>
//       </CardContent>
//       <CardFooter className="flex justify-between">
//         <Button variant="outline">Cancel</Button>
//         <Button>Deploy</Button>
//       </CardFooter>
//     </Card>
//   );
// };

// export default profile;

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserByEmail } from "@/lib/userData";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  const user_kinde = await getUser();
  const email = user_kinde?.email;
  const user = await getUserByEmail(email);

  if (!user) {
    return notFound();
  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center pt-10">
        <Card className="w-1/2 p-6 shadow-lg bg-white">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              User Profile
            </CardTitle>
            <CardDescription className="text-center">
              View your personal details
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-10">
            <Avatar className=" w-56 h-56 rounded-2xl">
              <img
                src={user.picture}
                alt="Profile"
                className="w-full h-full object-cover rounded-2xl"
              />
            </Avatar>
            <div className="grid grid-cols-[auto,1fr] gap-x-10 gap-y-2 w-full px-8">
              <Label className="text-left">First Name:</Label>
              <p>{user.firstName}</p>
              <Label className="text-left">Last Name:</Label>
              <p>{user.lastName}</p>
              <Label className="text-left">Email:</Label>
              <p>{user.email}</p>
              <Label className="text-left">City:</Label>
              <p>{user.city}</p>
              <Label className="text-left">College:</Label>
              <p>{user.college}</p>
              <Label className="text-left">Department:</Label>
              <p>{user.department}</p>
              <Label className="text-left">Year of Study:</Label>
              <p>{user.yearOfStudy}</p>
              <Label className="text-left">Courses Registered:</Label>
              <p>{user.courseRegistered}</p>
            </div>
          </CardContent>
        </Card>
        <p className="text-lg font-semibold mt-4 ml-10 self-start">
          My Workshops
        </p>
      </div>

      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Sienna Hewitt</CardTitle>
          <CardDescription>siennahewitt@gmail.com</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>First seen</Label>
            <p>1 Mar, 2025</p>
          </div>
          <div>
            <Label>First purchase</Label>
            <p>4 Mar, 2025</p>
          </div>
          <div>
            <Label>Revenue</Label>
            <p>$118.00</p>
          </div>
          <div>
            <Label>MRR</Label>
            <p>$0.00</p>
          </div>
          <div>
            <Label>Name</Label>
            <p>Sienna Hewitt</p>
          </div>
          <div>
            <Label>Email address</Label>
            <p>siennahewitt@gmail.com</p>
          </div>
          <div>
            <Label>Country</Label>
            <p>United States</p>
          </div>
          <div>
            <Label>Username</Label>
            <p>untitledui.com/siennahewitt</p>
          </div>
          <div>
            <Badge variant="secondary" className="mt-2">
              VERIFIED 2 JAN, 2025
            </Badge>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </CardFooter>
      </Card>
    </>
  );
}
