const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const WeatherSchema = mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WeatherModels = mongoose.model("weather", WeatherSchema);

module.exports = {
  WeatherModels,
};
