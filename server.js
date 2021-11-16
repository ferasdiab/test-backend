const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());

app.use(cors());


const toDos = ["wake up", "eat breakfast", "code"];

app.get("/", (req, res) => {
  res.status(200);
  res.json("hello from my app");
});

app.get("/toDos", (req, res) => {
  res.status(200);
  res.json(toDos);
});



app.listen(process.env.PORT || 5000, () => {
  console.log("server is running" + process.env.PORT);
});




/*
const toDos = ["wake up", "eat breakfast", "code"];

app.get("/",(req,res)=>{
  res.status(200)
  res.json("hello from my app")
})

app.get("/toDos",(req,res)=>{
  res.status(200)
  res.json(toDos);
});




*/