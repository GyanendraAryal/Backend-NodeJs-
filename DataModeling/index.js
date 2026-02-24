import express from "express";


const app = express();
const PORT = 8000;

//Routes
app.get("/",(req,res) =>{
    res.send("Home Page");
})




app.listen(PORT,(err) =>{
    console.log("Server is up on port:✅",PORT);
})