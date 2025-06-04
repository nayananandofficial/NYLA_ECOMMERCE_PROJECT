import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    size: String,
    color: String,
    quantity: Number,
  }],
  amount: Number,
  shippingInfo: {
    name: String,
    address: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  paymentIntent: String,
  status: { type: String, default: 'Processing' },
}, { timestamps: true });

export default mongoose.model('Order', orderSchema); 