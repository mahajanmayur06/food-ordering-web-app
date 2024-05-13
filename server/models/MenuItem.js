import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    provider: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    imageUrl: { type: String }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema)
export default MenuItem