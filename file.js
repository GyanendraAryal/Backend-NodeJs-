const { error } = require("console")
const fs = require("fs")

fs.writeFileSync("./Log.txt", "Hello i'm from node js \n")
fs.appendFileSync("./Log.txt", "and i'm from appendFile")

fs.writeFile('./Log.txt', "i'm from async func", (error) => {
    console.log("Error: ", error);
})

fs.readFile('./Log.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log("Error: ",error);
    } 
    console.log("Result: ", result);
    
})
// console.log("Message is: ", result);

