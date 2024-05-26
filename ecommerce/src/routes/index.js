import express from 'express';
import productRoutes from '../controllers/product/index.js';
import userRoutes from '../controllers/user/index.js';

const router = express.Router();

router.use('/v1/product', productRoutes);
router.use('/v1/user', userRoutes);

export default router;
