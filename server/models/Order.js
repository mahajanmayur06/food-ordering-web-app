import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    menuItem: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    totalPrice: { type: Number },
});

const OrderSchema = new Schema({
    items: [CartItemSchema],
    totalCartPrice: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, enum: ["placed", "paid", "inProgress", "outForDelivery", "delivered"]},
    createdAt: { type: Date, default: Date.now },
    lastStatus: { type: Date, default: Date.now },
    deliveredAt: { type: Date },
    restaurantName: { type: String, required: true },
});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
