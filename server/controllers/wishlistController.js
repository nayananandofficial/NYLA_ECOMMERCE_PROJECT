import User from '../models/User.js';

export const addToWishlist = async (req, res) => {
  const productId = req.params.productId;
  const user = await User.findById(req.user._id);
  if (!user.wishlist.includes(productId)) {
    user.wishlist.push(productId);
    await user.save();
  }
  res.json({ wishlist: user.wishlist });
};

export const removeFromWishlist = async (req, res) => {
  const productId = req.params.productId;
  const user = await User.findById(req.user._id);
  user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
  await user.save();
  res.json({ wishlist: user.wishlist });
}; 