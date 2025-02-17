import { connectToDatabase } from "@/lib/mongodb";
import UserDetails from "@/models/UserDetails";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    const { email } = req.query;
    const user = await UserDetails.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
