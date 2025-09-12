const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all suppliers (protected - all authenticated users)
router.get('/', authMiddleware.authenticate, supplierController.getAllSuppliers);

// Get a single supplier by ID (protected - all authenticated users)
router.get('/:id', authMiddleware.authenticate, supplierController.getSupplierById);

// Create a new supplier (protected - only Admin and Manager)
router.post('/', 
    authMiddleware.authenticate,
    authMiddleware.authorize(['Admin', 'Manager']), 
    supplierController.createSupplier
);

// Update a supplier (protected - only Admin and Manager)
router.put('/:id', 
    authMiddleware.authenticate,
    authMiddleware.authorize(['Admin', 'Manager']), 
    supplierController.updateSupplier
);

// Delete a supplier (protected - only Admin)
router.delete('/:id', 
    authMiddleware.authenticate,
    authMiddleware.authorize(['Admin']), 
    supplierController.deleteSupplier
);

module.exports = router;
