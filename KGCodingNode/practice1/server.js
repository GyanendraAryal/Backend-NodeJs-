import express from "express"
import dotenv from 'dotenv'

dotenv.config()
let app = express();
app.use(express.json());
let PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send({status:200,message:"I'm from the home page"})
})
app.get("/contact",(req,res)=>{
    res.send({status:200,message:"I'm from the contact page"})
})
app.post("/submit-form",(req,res)=>{
    const username = req.body.username
    res.send({
        status:200,
        message:"User Received",
        bodyData:req.body,
        queryData:req.query
    })
    res.end()
    // console.log(username);
    
    // res.send({status:200,message:"Form is submitted ✅"}) Cannot set the header after they are sent
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})