const app = require("express")();


app.get("/",(req,res)=>{
    res.json({
        status:"200 OK",
        message:"I'm on CMS02"
    })
})

app.listen(2000,()=>{
    console.log("NodeJs listening on port 2000");
})