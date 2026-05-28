const http = require("http")

const server = http.createServer((req, res) => {
    console.log(res);
    
    console.log("New request arrived!!");
    res.end("Hello from the sever")
})


server.listen(400, () => {
    console.log("server running✅");

})