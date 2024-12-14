require('dotenv').config();
const connectDB = require('./db/connect');
const productModel = require('./model/product');
const productJson = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.DB_URI);
        productModel.deleteMany();
        await productModel.create(productJson);
        console.log('JSON inserted to DB successfully...');
    } catch (error) {
        console.log(error);
    }
}

start();
