import connectDB from "./db/db.js";
import dotenv from "dotenv"


dotenv.config({
    path:'./.env'
});

connectDB();










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

