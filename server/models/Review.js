import mongoose from "mongoose";
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String, required: true },
    date : { type: Date, default: Date.now },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const Review = mongoose.model('Review', reviewSchema);

export default Review