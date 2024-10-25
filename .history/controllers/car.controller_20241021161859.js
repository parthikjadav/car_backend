const { carModel } = require("../models");

const getAllCars =as (req,res) => {
    try {
        const data = carModel
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}