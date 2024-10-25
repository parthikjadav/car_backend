require("dotenv").config();

const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect');
const router = require("./routes");

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cores 
app.use(cors());
app.use("",router)

connectDB();

app.get('/api/', (req, res)=>{ 
    res.status(200).json({"status": "OK"});
})

app.listen(8000, () => console.log('Server is running on port 8000...'));
