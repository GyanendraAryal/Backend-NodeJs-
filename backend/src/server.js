// require('dotenv').config({path:'./env'})
// import mongoose from 'mongoose'
// import { DB_NAME } from './constants';
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/db.js';
    
dotenv.config({
    path:'./.env'
})
    
const app = express()


connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.error("MongoDB connection failed ❌",error)
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port ✅ ${process.env.PORT}`);
            
        })
    })
    .catch((error) => {
        console.log("MongoDB connection failed ❌: ",error);
        
    })




















// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("Error:",error)
//         })

//         app.listen(PORT, () => {
//             console.log(`SERVER is listening on port ${process.env.PORT}`);
            
//         })

//     } catch (error) {
//         console.error("Error:", error)
//     }
// })()