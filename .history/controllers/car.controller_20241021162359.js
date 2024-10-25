const { carModel } = require("../models");

const getAllCars =async (req,res) => {
    try {
        console.log();
        
        const data = await carModel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

module.exports = {getAllCars};