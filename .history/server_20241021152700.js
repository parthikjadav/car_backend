const express = require('express');
const app = express();
const cors = require('cors');

// Middleware to parse JSON requests
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// cores 
app.use(cors());

app.get('/api/', (req, res)=>{ 
    res.send('API is running...');
})

app.listen(3000, () => console.log('Server is running on port 3000...'));
