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