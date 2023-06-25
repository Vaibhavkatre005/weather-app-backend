const { WeatherModels } = require("../models/WeatherModels");
const axios = require("axios");

getWeather = async (req, res) => {
  const location = req.query.location;
  console.log(location, "location");

  try {
    const apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&id=524901&appid=17274a7d15e1f8e69ffc4512b6866008`

    const response = await axios.get(apiUrl);
    const weatherDatas = response.data;
    console.log(weatherDatas, "controller");

      const weather = new WeatherModels({
      location: weatherDatas.name,
      temperature: weatherDatas.main.temp,
      humidity: weatherDatas.main.humidity,
    });

    await weather.save();

    res.json(weatherDatas);
  } catch (error) {
    
    res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  getWeather,
};
