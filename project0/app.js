//console.log("Hello World!!");
//console.log(5+2);
console.log("Welcome to NodeJs!!");
//const a = 4;
//const b = 4;
const name = "Gyanendra"
let surname = " Aryal"
//console.log("The value of a and b are:"+a);
//console.log("The sum of a and b is:"+(a+b));
console.log("The name of this project owner is:"+(name+surname));

//Array

let arr = ["1", "Val2", 2 ];
console.log("Value in array position 0 and 2 are " +arr[0],arr[2])

//Express

const app = require("express")();
//Alternative
//const express = require("express");
//const app = express(); 

app.get("/",(req,res)=>{
    //res.send("<h1>Hello I'm from the home page.</h1>");
    res.json({
        message:"Hello I'm from the JSON page."
    })
});

app.get("/contact",(req,res)=>{
    //res.send("I'm the contact page.");
    res.json({
        message:"I'm from the contact page."
    })
});

app.get("/about",(req,res)=>{
    //res.send("I'm the about page.");
    res.json({
        message:"I'm from the about page"
    })
})

app.listen(3000,(req,res)=>{
    console.log("NodeJs has started at port 3000");
})