const express = require('express');
const { getAllCars, addCar, fetchCar, fetch6cars } = require('../controllers/car.controller');
const router = express.Router();

router.get('/',getAllCars);
router.post('/add',addCar);
router.get('/:slug',fetchCar);
router.get('/latest',fetch6cars);

module.exports = router;