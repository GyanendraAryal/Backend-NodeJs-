import http from 'http'
let PORT = 3000
let server = http.createServer((req,res) =>{
    // console.log(req.url,req.method,req.headers);
    // res.setHeader('Content-type','json');

    if(req.url==="/"){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Home Page</title></head>')
        res.write(`
    <body>
        <header>
            <h1>Welcome to My Website</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Me</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <h2>About This Site</h2>
                <p>This is a basic home page created using <strong>only HTML</strong>.</p>
            </section>
        </main>
        <footer>
            <p>&copy; 2024 My Basic HTML Website</p>
        </footer>
    </body>
`);
        res.write('</html>')
        return res.end();
    }else if(req.url === "/product"){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Product Page</title></head>')
        res.write('<body><h1>Program Written In Product Page!!</h1></body>')
        res.write('</html>')
        return res.end();
    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Lost Page</title></head>')
    res.write('<body><h1>Page Under Constructionç!!</h1></body>')
    res.write('</html>')
    return res.end();


    // res.setHeader('Content-type','text/html')
    // res.write('<html>')
    // res.write('<head><title>Conplete Coding</title></head>')
    // res.write('<body><h1>Program Written In Node!!</h1></body>')
    // res.write('</html>')
    // res.end();
    // res.end("End of page");
})

server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
    
})