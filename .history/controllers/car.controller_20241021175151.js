const { carModel } = require("../models");

const getAllCars =async (req,res) => {
    try {
        
        const data = await carModel.find();
        console.log(data,"called");
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

const addCar = async (req, res) => {
    try {
        const obj = {
            "id": "1",
            "make": "Toyota",
            "model": "Camry",
            "year": 2023,
            "price_range": {
                "min": 24000,
                "max": 30000
            },
            "overall_rating": 8.5,
            "type": "Sedan",
            "trim_levels": [
                {
                    "trim": "LE",
                    "price": 24000,
                    "features": [
                        "Standard features",
                        "Upgraded audio system"
                    ]
                },
                {
                    "trim": "XSE",
                    "price": 29000,
                    "features": [
                        "Leather seats",
                        "Sport-tuned suspension"
                    ]
                }
            ],
            "detailed_description": "The 2023 Toyota Camry combines stylish looks with a comfortable ride, making it an excellent choice for families and commuters alike. Its spacious interior and advanced safety features ensure a smooth driving experience.",
            "fuel_type": "Gasoline",
            "emissions": {
                "co2": "160 g/km",
                "compliance": "ULEV"
            },
            "warranty": {
                "basic": "3 years/36,000 miles",
                "powertrain": "5 years/60,000 miles"
            },
            "maintenance_costs": {
                "annual_service": 500,
                "common_repairs": {
                    "brake_pads": 300,
                    "oil_change": 100
                }
            },
            "user_submissions": [
                {
                    "username": "CarFan2024",
                    "photo": "url_to_user_photo.jpg",
                    "review": "Amazing performance and comfort!"
                }
            ],
            "images": [
                "https://example.com/toyota_camry_2023_front.jpg",
                "https://example.com/toyota_camry_2023_side.jpg"
            ],
            "faqs": [
                {
                    "question": "What is the warranty on the Toyota Camry?",
                    "answer": "The 2023 Toyota Camry comes with a 3-year/36,000-mile basic warranty and a 5-year/60,000-mile powertrain warranty."
                },
                {
                    "question": "Does the Camry have all-wheel drive?",
                    "answer": "Yes, the Camry offers an all-wheel-drive option for select trims."
                },
                {
                    "question": "What is the fuel efficiency of the Camry?",
                    "answer": "The Camry achieves approximately 28 MPG in the city and 39 MPG on the highway."
                }
            ]
        };
        const data = await carModel.create();
        console.log(data,"data");
        res.status(201).json(data);
    } catch (error) {
        
    }
}

module.exports = {getAllCars}