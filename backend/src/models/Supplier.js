const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactInfo: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to update the updatedAt field before saving
SupplierSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Supplier', SupplierSchema);
