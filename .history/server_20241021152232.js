const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended)
app.use(express.json());