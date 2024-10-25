const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    "min"
}) 

const carSchema = mongoose.Schema({
    "id": String,
    "make": String,
    "model": String,
    "year": Number,
    "price_range": Number,
    "mileage": Number,
    "color": String,
});