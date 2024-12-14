require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const products_routes = require('./routes/products');

app.get('/', (req, res) => {
    res.send('Hello, We are live');
})

app.use('/api/products', products_routes);

const start = async () => {
    try {
        await connectDB(process.env.DB_URI);
        app.listen(PORT, () => {
            console.log(`App listening on http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log("Error: ", error);
    }
}

start();
