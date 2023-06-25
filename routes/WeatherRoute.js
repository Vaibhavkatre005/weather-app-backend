const {Router} = require('express');
const { getWeather } = require('../controllers/DataCurrWeather');
const WeatherRouter = Router()
WeatherRouter.get('/getWeather',  getWeather)
module.exports={
WeatherRouter
}

