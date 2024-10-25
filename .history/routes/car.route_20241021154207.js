const express = require('express');
const router = express.Router();

router.get('/', function (req, res) { 
    res.json({ message: 'Welcome to our API! car found' });
});

module.exports = router;