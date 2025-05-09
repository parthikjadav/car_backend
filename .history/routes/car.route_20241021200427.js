const express = require('express');
const { getAllCars, addCar } = require('../controllers/car.controller');
const router = express.Router();

router.get('/',getAllCars);
router.post('/add',addCar);
router.post('/:slug',addCar);

module.exports = router;