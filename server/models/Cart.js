import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CartItemSchema = new Schema({
    menuItem: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    totalPrice: { type: Number },
});

const CartSchema = new Schema({
    username : { type : Schema.Types.ObjectId, ref: 'User', required : true},
    items: [CartItemSchema],
    totalCartPrice: { type: Number, required: true },
});

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;