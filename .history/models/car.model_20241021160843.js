const mongoose = require('mongoose');

const priceSchema = mongoose.Schema({
    "min": Number,
    "max": Number,
    "currency": String,
    "currency_symbol": String,
    "decimal_places": Number,
    "decimal_separator": String,
    "thousands_separator": String,
    "locale": String,
    "locale_specific_format": String,
    "locale_specific_price_range": [priceSchema]
 });
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