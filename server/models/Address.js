import mongoose from "mongoose";
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, default : "India" }
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
