import express from "express";
import connectDB from "./db.js"


const app = express();
const PORT = 8000;


//Connect DB
connectDB();

app.get("/",(req,res) =>{
    console.log("I'm indide the HomePage");
    return res.send("I'm from Home");
})

app.listen(PORT,(err) =>{
    console.log("Server is runnig✅ on port: ",PORT);
    
})