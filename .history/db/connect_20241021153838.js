const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(mongodb+srv://jadavparthik56:parthik2345@halfstar.vquw7.mongodb.net/).then(()=> console.log("Connect successfull")).catch(()=> console.log("db connection errors"));
}

module.exports = connectDB;