const { carModel } = require("../models");

const getAllCars =async (req,res) => {
    try {
        const data = carModel
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}