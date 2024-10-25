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
        res.status(201).json(data);
    } catch (error) {
        console.log(error.message);
    }
}

const fetchCar = async (req, res) => {
    try {        
        const slug = req.params.slug;
        const data = await carModel.find({ slug });
        res.status(200).json({data});
    } catch (error) {
        res.status(404).json({"message":error.message});
    }
}

const fetchLatestCars = async (req, res) => {
    try {
        console.log("called");
        
        const data = await carModel.find().sort;
        console.log(data,"data six");
        
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

module.exports = {getAllCars,addCar,fetchCar,fetchLatestCars}