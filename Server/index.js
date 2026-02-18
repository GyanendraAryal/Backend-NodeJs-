const http = require('http');
const Port = 8000;

const myServer = http.createServer((req,res)=>{
    console.log("New request received");
    res.end('Hello from server');
});

myServer.listen(Port,()=>{
    //console.log("Server running on port",Port);
    console.log('Im running on port',Port);
})