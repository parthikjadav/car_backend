const express = require('express');
const { getAllCars, addCar, fetchCar } = require('../controllers/car.controller');
const router = express.Router();

router.get('/',getAllCars);
router.post('/add',addCar);
router.post('/:slug',fetchCar);

module.exports = router;