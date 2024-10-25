const router = require('express').Router();
const carRoute = require("./car.route")

router.get('/car', carRoute);

