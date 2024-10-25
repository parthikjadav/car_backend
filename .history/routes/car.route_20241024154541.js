const express = require('express');
const { getAllCars, addCar, fetchCar, fetchcarssix } = require('../controllers/car.controller');
const router = express.Router();

router.get('/',getAllCars);
router.post('/add',addCar);
router.get('/six',fetchcarssix);
router.get('/:slug',fetchCar);

module.exports = router;