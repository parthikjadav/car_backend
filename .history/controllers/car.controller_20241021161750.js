const { carModel } = require("../models");

const getAllCars = (req,res) => {
    try {
        const data = carModel
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}