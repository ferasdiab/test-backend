const express = require("express");
const cityRoute = express.Router();

const { addCity, getAllCity, getCity } = require("../controllers/city");

cityRoute.post("/city", addCity);
cityRoute.get("/city", getAllCity);
cityRoute.get("/city/:id", getCity);

module.exports = cityRoute;
