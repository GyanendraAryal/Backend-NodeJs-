// For Query Parameters - We have to install (url) from node package manager
// npm install url
const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 8000;

const myServer = http.createServer((req, res) => {
    /* console.log("Hiii! I'm from the server");
    res.end("I'm inside the server!!"); */

    const data = `${req.url} Another request received\n`
    const myURL = url.parse(req.url, true);
    console.log(myURL);
    fs.appendFile('log.txt', data, (err, result) => {
        if (err) console.error('Log write failed:', err);
    })
    if (req.url === "/favicon.ico") return res.end("heyyyy");
    switch (myURL.pathname) {
        case "/":
            res.end("Home Page");
            break;

        case "/about":
            res.end("About Page");
            break;

        case "/contact":
            const username = myURL.query.usename;
            res.end(`Hii, ${username}`);
            break;

        case "/search":
            const search = myURL.query.search_query;
            res.end("Here are your results for "+search);

        default:
            res.end("404 - Page not found!!!");
    }


});

myServer.listen(port, (err) => {
    console.log("Server running on port: ", port);
})