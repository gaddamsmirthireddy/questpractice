require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
const Product = require('./src/models/Product');
const Supplier = require('./src/models/Supplier');
const User = require('./src/models/User');
const Transaction = require('./src/models/Transaction');

const productsData = require('./dataset/products.json');
//const suppliersData = require('./dataset/suppliers.json');
//const usersData = require('./dataset/users.json');
//const transactionsData = require('./dataset/transactions.json');

const seedDB = async () => {
  try {
    await connectDB();

    await Product.deleteMany();
    await Supplier.deleteMany();
    await User.deleteMany();
    await Transaction.deleteMany();

    await Product.insertMany(productsData);
    //await Supplier.insertMany(suppliersData);
    //await User.insertMany(usersData);
    //await Transaction.insertMany(transactionsData);

    console.log('✅ Database seeded successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
