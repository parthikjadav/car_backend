const express = require('express');
const { getAllCars, addCar, fetchCar, fetchLatestCars } = require('../controllers/car.controller');
const router = express.Router();

router.get('/',getAllCars);
router.post('/add',addCar);
router.get('/latest',fetchLatestCars);
router.get('/:slug',fetchCar);

module.exports = router;