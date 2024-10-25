const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    "min": Number,
    "max": Number,
}) 

const trimSchema = mongoose.Schema({
    "trim": String,
    "price": Number,
    "features": [String],
    "price_range": priceSchema,
    "mileage": Number,
    "color": String,
})

const carSchema = mongoose.Schema({
    "id": String,
    "make": String,
    "model": String,
    "year": Number,
    "price_range": priceSchema,
    "mileage": Number,
    "color": String,
    "overall_rating": Number,
     "type": String,
    "trim_levels": [trimSchema],

});