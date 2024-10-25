const router = require('express').Router();
const carRoute = require("./car.route")

router('/car', carRoute);

router.get('/', function (req, res) { 
    res.json({ message: 'Welcome to our API! car found' });
});

module.exports = router;