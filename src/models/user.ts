/** User model */
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;