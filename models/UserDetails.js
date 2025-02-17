import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const connection = mongoose.connection;
const AutoIncrement = AutoIncrementFactory(connection);

const UserDetailsSchema = new mongoose.Schema(
  {
    k_id: { type: String, required: true },
    yuktahaId: { type: String, unique: true }, // String for prefix
    yuktahaNumber: { type: Number, unique: true }, // Ensure it gets assigned
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true },
    picture: { type: String, required: true },
    college: { type: String, required: true },
    department: { type: String, required: true },
    yearOfStudy: { type: String, required: true },
    workshopsRegistered: { type: Number, required: true, default: 0 },
    workshop: { type: Array, required: true, default: [] },
    phoneNumber: { type: String, required: true },
    userLevel: { type: String, required: true, default: "user" },
  },
  { timestamps: true, collection: "User-Details" }
);

// ✅ Apply Auto-Increment Plugin
UserDetailsSchema.plugin(AutoIncrement, {
  inc_field: "yuktahaNumber",
  start_seq: 1,
});

// ✅ Ensure `yuktahaId` is Assigned Before Saving
UserDetailsSchema.pre("save", function (next) {
  if (!this.yuktahaId && this.yuktahaNumber) {
    this.yuktahaId = `yuk2k25_${this.yuktahaNumber}`;
    console.log("Generated yuktahaId:", this.yuktahaId);
  }
  next();
});

export default mongoose.models.UserDetails ||
  mongoose.model("UserDetails", UserDetailsSchema, "User-Details");
