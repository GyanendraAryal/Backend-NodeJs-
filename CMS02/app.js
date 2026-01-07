const { connectDatabase } = require("./database/database");

const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));

//DATABASE CONNECTION FUNCTION
connectDatabase();

//GEt API
app.get("/",(req,res)=>{
    res.json({
        status:"200 OK",
        message:"I'm on CMS02"
    })
})

//Create Blog API
app.post("/createBlog",(req,res)=>{

        res.status(200).json({
            message : "Blog was Created sucessfully"
        })
        console.log(res.body);


        /*res.json({
            status : 200,
            message : "Blog was created sucessfully"
        })*/
})

app.listen(2000,()=>{
    console.log("NodeJs listening on port 2000");
})