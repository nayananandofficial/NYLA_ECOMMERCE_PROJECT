import Order from '../models/Order.js';
import User from '../models/User.js';
// import sendEmail from '../utils/sendEmail.js'; // Uncomment if implementing email

export const placeOrder = async (req, res) => {
  const { items, amount, shippingInfo, paymentIntent } = req.body;
  try {
    const order = await Order.create({
      user: req.user._id,
      items,
      amount,
      shippingInfo,
      paymentIntent,
      status: 'Processing',
    });
    // Loyalty points logic
    const user = await User.findById(req.user._id);
    const pointsEarned = Math.floor(amount / 1000) * 10;
    user.points += pointsEarned;
    await user.save();
    // Optionally send confirmation email
    // await sendEmail({ ... });
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: 'Order failed', error: err.message });
  }
};

export const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
}; 