import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String },
    address: { type: Schema.Types.ObjectId, ref: "Address" },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
