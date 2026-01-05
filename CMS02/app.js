const app = require("express")();
const mongoose = require("mongoose")

//connecting to database

mongoose.connect("mongodb+srv://Root:password*%23@cluster0.2nvsf5h.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("Database connected sucessfully!!");
})


app.get("/",(req,res)=>{
    res.json({
        status:"200 OK",
        message:"I'm on CMS02"
    })
})

app.listen(2000,()=>{
    console.log("NodeJs listening on port 2000");
})