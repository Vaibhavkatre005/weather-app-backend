const mongoose = require('mongoose');
require('dotenv').config()
const connection = mongoose.connect("mongodb+srv://Weather_App_DB:weather@cluster0.oytf1ba.mongodb.net/?retryWrites=true&w=majority")
module.exports = {
connection
}