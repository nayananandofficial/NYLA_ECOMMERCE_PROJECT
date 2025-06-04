import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { addToWishlist, removeFromWishlist } from '../controllers/wishlistController.js';
const router = express.Router();
router.post('/:productId', protect, addToWishlist);
router.delete('/:productId', protect, removeFromWishlist);
export default router; 