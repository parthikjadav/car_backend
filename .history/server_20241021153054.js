const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// cores 
app.use(cors());

app.get('/api/', (req, res)=>{ 
    res.status(200).json()
})

app.listen(8000, () => console.log('Server is running on port 8000...'));
