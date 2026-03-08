import express from "express";
import authRoutes from "./routes/authRoutes.js";


const PORT=8000;


const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);



app.listen(PORT,()=>{
    console.log("Server running on port✅: ",PORT)
})