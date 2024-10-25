const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    "min": Number,
    "max": Number,
}) 

const carSchema = mongoose.Schema({
    "id": String,
    "make": String,
    "model": String,
    "year": Number,
    "price_range": priceSchema,
    "mileage": Number,
    "color": String,
});