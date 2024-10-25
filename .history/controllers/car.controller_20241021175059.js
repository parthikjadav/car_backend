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
        const data = await carModel.create();
        console.log(data,"data");
        res.status(201).json(data);
    } catch (error) {
        
    }
}

module.exports = {getAllCars}