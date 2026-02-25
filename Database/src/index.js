import connectDB from "./db/db.js";
import dotenv from "dotenv"
import app from "./app.js";


dotenv.config({
    path: './.env'
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed: ❌", err)
    })










/* 
const app = express();
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("Error: ",error);
        })

        app.listen(process.env.PORT,() =>{
            console.log(`Server is running✅ on port: ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("Error: ", error);
        process.exit(1);
    }
})()
 */

