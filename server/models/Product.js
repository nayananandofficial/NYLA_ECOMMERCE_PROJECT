import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  comment: String,
}, { timestamps: true });

const productSchema = mongoose.Schema({
  name: String,
  brand: String,
  category: String,
  price: Number,
  description: String,
  images: [String],
  sizes: [String],
  colors: [String],
  tags: [String],
  reviews: [reviewSchema],
  inStock: Boolean
}, { timestamps: true });

export default mongoose.model('Product', productSchema); 