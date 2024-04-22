const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    available: {
        type: Boolean,
        default: true,
    },
    image: String,
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;
