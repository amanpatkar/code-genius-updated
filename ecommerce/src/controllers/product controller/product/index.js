import express from 'express'
import productController from './product.controller.js';

const router = express.Router();

router.get('/',productController.getProduct)
router.post('/',productController.createProduct)
router.get('/',productController.getSingleProduct)
router.patch('/:id',productController.updateProduct);
router.delete('/:id',productController.deleteProduct)
export default router
