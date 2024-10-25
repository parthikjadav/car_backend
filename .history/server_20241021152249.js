const express = require('express');
const app = express();
const cores = require('

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cores 
