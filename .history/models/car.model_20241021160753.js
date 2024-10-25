const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    "id": String,
    "make": String,
    "model": String,
    "year": Number,
    "price ": Number,
    "mileage": Number,
    "color": String,
});