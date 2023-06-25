const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { WeatherRouter } = require("./routes/WeatherRoute");
const { connection } = require("./Config/db");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Backend start");
});
// 
// app.get("/about", (req, res) => {
  // res.send("About page");
// });

app.use('/api',WeatherRouter)

app.listen(PORT, async () => {
  try {
      await connection;
    console.log("connected to db successfully");
  } catch (err) {
    console.log(err);
    console.log("err from connected to DB");
  }
  console.log("http://localhost:8080");
});
