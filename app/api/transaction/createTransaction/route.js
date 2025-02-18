import Transaction from "@/models/Transaction";
import mongoose from "mongoose";

export default async function createTransaction(transactionData) {
  await mongoose.connect(process.env.MONGODB_URI);

  const transaction = new Transaction(transactionData);
  await transaction.save();

  return transaction;
}
