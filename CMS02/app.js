const app = require("express")();
const { connectDatabase } = require("./database/database");
//DATABASE CONNECTION FUNCTION
connectDatabase();

//GEt API
app.get("/",(req,res)=>{
    res.json({
        status:"200 OK",
        message:"I'm on CMS02"
    })
})

app.listen(2000,()=>{
    console.log("NodeJs listening on port 2000");
})