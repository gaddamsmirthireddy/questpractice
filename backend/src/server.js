// backend/src/server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Middleware
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/suppliers', require('./routes/supplierRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));
app.use('/api/files', require('./routes/fileRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
