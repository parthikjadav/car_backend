const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DB_URL).then(()=> console.log("Connect successfull")).catch(()=> console.log("db connection errors",process.env.DB_URL));
}

module.exports = connectDB;