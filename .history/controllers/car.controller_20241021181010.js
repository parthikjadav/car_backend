const { carModel } = require("../models");

const getAllCars =async (req,res) => {
    try {
        const data = await carModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

const addCar = async (req, res) => {
    try {
        const body = req.body;
        const data = await carModel.create(body);
        console.log(data,"data");   
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {getAllCars,addCar}