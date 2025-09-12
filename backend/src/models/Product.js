const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  reorderPoint: { type: Number, default: 10 },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier' }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
