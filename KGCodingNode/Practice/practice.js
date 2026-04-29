import http from 'http'
import path from 'path'
import fs from 'fs'

let server = http.createServer((req,res)=>{
    // console.log("Server Up!!");
    let url = req.url;
    console.log(url);
    

    switch(url){
        case '/home':
            // console.log("This is home page!!");
            // res.write(`This is Home page`)
            // fs.readFile(path.join('Practice','./temp.html'),(err,data)=>{
            // res.readFile(path.join('Practice','./temp.html'),(err,data)=>{
            //     if(err){
            //         res.writeHead(400);
            //         res.end("File not found!!")
            //     }
            //     else{
            //         res.writeHead(200,{'Content-Type':'text/html'});
            //         res.write(data);
            //         res.end();
            //     }
            // });
            res.write("<h1>This HomePage</h1>")
            return res.end();
            break;
        case '/men':
            // console.log("This is men page!!");
            res.write("<h1>This MenPage</h1>")
            return res.end();
            break;
            case '/women':
                // console.log("This is women page!!");
                res.write("<h1>This WomenPage</h1>")
                return res.end();
                break;
                case '/kids':
                    // console.log("This is kids page!!");
                    res.write("<h1>This KidsPage</h1>")
                    return res.end();
                    break;
                    case '/cart':
                        // console.log("This is cart page!!");
                        res.write("<h1>This CartPage</h1>")
            return res.end();
            break;
    }
})

server.listen(3000,()=>{
    console.log("Server is running on port✅",3000);
    
})