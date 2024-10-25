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

//  "overall_rating": 8.5,
//       "type": "Sedan",
//       "trim_levels": [
//         {
//           "trim": "LE",
//           "price": 24000,
//           "features": [
//             "Standard features",
//             "Upgraded audio system"
//           ]
//         },
//         {
//           "trim": "XSE",
//           "price": 29000,
//           "features": [
//             "Leather seats",
//             "Sport-tuned suspension"
//           ]
//         }
//       ],

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
    "trim_levels": [trimSchema]
});