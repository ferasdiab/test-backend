const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());
////////////////////////////
const cityRoute  = require("./routers/routes/cityRoute")


app.use(cityRoute);

////////////////////////////

// console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log("server is running");
});
