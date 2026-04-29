import express from 'express'
// import http from 'http'

const server = express();
let PORT = 3000

server.use((req,res,next)=>{
  console.log(`I'm the first Middleware`);
  // res.send(`I'm the first Middleware`);
  next()
})
server.use("/blog",(req,res,next)=>{
  console.log(`I'm the Blog Middleware`);
  // res.send(`I'm the first Middleware`);
  next()
})
server.get('/', (req, res) => {
  res.send("Hello World, I'm Home page!!");
});

server.get('/blog',(req,res,next)=>{
  res.send(`I'm the Blog Page`);
  next()
})
// let server = http.createServer(app);
server.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
    
})