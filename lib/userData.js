import { connectToDatabase } from "@/lib/mongodb";
import UserDetails from "@/models/UserDetails";

export async function getUserByEmail(email) {
  await connectToDatabase();

  const user = await UserDetails.findOne({ email }).lean();

  return user ? { ...user, _id: user._id.toString() } : null;
}
