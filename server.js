const express = require("express");
const cors = require("cors");

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



const port = 4500;
app.listen(port, () => {
  console.log("server is running");
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