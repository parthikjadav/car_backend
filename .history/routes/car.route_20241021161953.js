const express = require('express');
const { carModel } = require('../models');
const router = express.Router();

router.get('/',carModel);

module.exports = router;