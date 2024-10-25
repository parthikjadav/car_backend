const carSchema = require("../models/car.model");

const getAllCars = (req,res) => {
    try {
        const data = carSchema.
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}