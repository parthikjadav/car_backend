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

const fetchCar = async (req, res) => {
    try {
        console.log("called");
        
        const slug = req.params.slug;
        const data = await carModel.find({ slug });
        console.log(data,"data ");
        res.status(200).json({data});
    } catch (error) {
        res.status(404).json({"message":error.message});
    }
}

const fetch6cars = async (req, res) => {
    try {
        console.log("called");
        
        const data = await carModel.findMa();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

module.exports = {getAllCars,addCar,fetchCar,fetch6cars}