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
    "detailed_description": String,
    "fuel_type": String,
    "emissions": {
     "co2": String,
        "compliance": String
    s
});

//   "fuel_type": "Gasoline",
//       "emissions": {
//         "co2": "160 g/km",
//         "compliance": "ULEV"
//       },
//       "warranty": {
//         "basic": "3 years/36,000 miles",
//         "powertrain": "5 years/60,000 miles"
//       },
//       "maintenance_costs": {
//         "annual_service": 500,
//         "common_repairs": {
//           "brake_pads": 300,
//           "oil_change": 100
//         }
//       },
//       "user_submissions": [
//         {
//           "username": "CarFan2024",
//           "photo": "url_to_user_photo.jpg",
//           "review": "Amazing performance and comfort!"
//         }
//       ],
//       "images": [
//         "https://example.com/toyota_camry_2023_front.jpg",
//         "https://example.com/toyota_camry_2023_side.jpg"
//       ],
//       "faqs": [
//         {
//           "question": "What is the warranty on the Toyota Camry?",
//           "answer": "The 2023 Toyota Camry comes with a 3-year/36,000-mile basic warranty and a 5-year/60,000-mile powertrain warranty."
//         },
//         {
//           "question": "Does the Camry have all-wheel drive?",
//           "answer": "Yes, the Camry offers an all-wheel-drive option for select trims."
//         },
//         {
//           "question": "What is the fuel efficiency of the Camry?",
//           "answer": "The Camry achieves approximately 28 MPG in the city and 39 MPG on the highway."
//         }
//       ]
//     },