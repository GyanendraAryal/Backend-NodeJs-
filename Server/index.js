const http = require('http');
const fs = require('fs');
const Port = 8000;

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} Another request received\n`
    fs.appendFile('log.txt', log, (err, result) => {
        switch (req.url) {
            case '/': res.end("I'm from Home Page");
                break;
            case '/about': res.end("I'm from About Page");
                break;
            case '/contact': res.end("I'm from Contact Page");
                break;
            default: res.end('404-Page Not Found')
        }
    })

    //console.log(req);
    //console.log(req.headers);    //console.log("New request received");
});

myServer.listen(Port, () => {
    //console.log("Server running on port",Port);
    console.log('Im running on port', Port);
})

/* ok I"m learning MERN rn and i want a image with nodejs and react logo in protrait which metaphors 
inspiration, dedication and stoic(image should'nt be like vector or any form of cartoon keep it simple yet fullfills the requirement) */