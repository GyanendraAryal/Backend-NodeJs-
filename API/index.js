import express from "express";
import users from "./MOCK_DATA.json" with { type: 'json'};
import fs from 'fs';

const app = express();
const PORT = 8000;

//Middleware Plugin
//app.use(express.urlencoded({ extended : false }));

app.use((req, res, next) =>{
    console.log("Hello from middleware");
    return res.json("Hello from middleware")
    next();
})


//Routes
app.get("/",(req,res) =>{
    res.send("I'm Home Page!!");
});

app.get("/users",(req,res) =>{
    return res.json(users.map(u => u.first_name));
})

app.get("/api/users",(req,res) =>{
    return res.json(users.map(u => u.first_name));
})

app.listen(PORT,() =>{
    console.log("Server running on port: ", PORT);
    
})