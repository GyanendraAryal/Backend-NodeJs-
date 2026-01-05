const mongoose = require("mongoose");
exports.connectDatabase = async ()=>{

/*connecting to database
mongoose.connect("mongodb+srv://Root:password*%23@cluster0.2nvsf5h.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("Database connected sucessfully!!");
})*/


//Waits until the connection is established with the database
await mongoose.connect("mongodb+srv://Root:password*%23@cluster0.2nvsf5h.mongodb.net/?appName=Cluster0")
console.log("Database connected sucessfully through async await function!!");

}