const express = require('express');
const { getAllCars } = require('../controllers/car.controller');
const router = express.Router();

router.get('/',getAllCars);
router.post('/',getAllCars);

module.exports = router;