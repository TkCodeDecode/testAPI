const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['Apple', 'Samsung', 'One plus', 'Oppo', 'Vivo', 'Realme'],
            message: `{VALUE} not supported`
        }
    }
})

module.exports = mongoose.model('Product', productSchema);