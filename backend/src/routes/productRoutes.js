const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all products
router.get('/', productController.getAllProducts);

// Get a single product by ID
router.get('/:id', productController.getProductById);

// Create a new product (protected route - only Admin and Manager)
router.post('/', authMiddleware.authorize(['Admin', 'Manager']), productController.createProduct);

// Update a product (protected route - only Admin and Manager)
router.put('/:id', authMiddleware.authorize(['Admin', 'Manager']), productController.updateProduct);

// Delete a product (protected route - only Admin)
router.delete('/:id', authMiddleware.authorize(['Admin']), productController.deleteProduct);

// Update stock level (protected route - all authenticated users)
router.patch('/:id/stock', authMiddleware.authenticate, productController.updateStockLevel);

module.exports = router;
