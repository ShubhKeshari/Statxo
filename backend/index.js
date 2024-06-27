const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express());
app.use(cors());

const port = process.env.PORT || 8080;


app.get("/",(req,res)=>{
    res.status(200).json({error:false,message:"This is server home page"});
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on http://localhost:${port}`);
})