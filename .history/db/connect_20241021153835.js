const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect().then(()=> console.log("Connect successfull")).catch(()=> console.log("db connection errors"));
}

module.exports = connectDB;