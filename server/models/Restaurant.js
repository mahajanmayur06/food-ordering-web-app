import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required : true},
    location: { type: String, required: true },
    deliveryPrice: { type: Number, required: true },
    estimatedDeliveryTime: { type: Number, required: true },
    menuItems: [{ type : Schema.Types.ObjectId, ref: 'MenuItem'}],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
});

const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

export default Restaurant;
