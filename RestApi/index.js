import express, { json } from 'express';
import users from './MOCK_DATA.json' assert { type: 'json'}
const app = express();
const PORT = 8000;


//If the developer has /api then JSON data will be send if not /users then HTML doc

//Routes
app.get("/api/users", (req, res) => {
    return res.json(users);
});

//REST API
app.get("/users", (req, res) => {
    const html = `
<ul>
${users.map((users) => { return `<li>${users.first_name} </li>` })}.join("")}
</ul>`;
    res.send(html);
});
//Dynamic Routing using params
app.get("/api/users/:id",(req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
})

//Post Route
app.post("/api/users",(req,res) =>{
    //TODO; Create a new user
    return res.json({status:"pending"});
})

//Patch Routing
app.patch("/api/users/:id",(req,res) =>{
    //TODO: Updating the existing user
    return res.json({status:"Updating the user information"});
})

//Delete Routing
app.delete("/api/users/:id",(req,res) =>{
    //TODO: Deleting the existing user
    return res.json({status:"Deleting the user information"});
})


//Including all in one

app.route("/api/users/:id")
.get("/api/users/:id",(req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
})
.patch("/api/users/:id",(req,res) =>{
    //TODO: Updating the existing user
    return res.json({status:"Updating the user information"});
})
.delete("/api/users/:id",(req,res) =>{
    //TODO: Deleting the existing user
    return res.json({status:"Deleting the user information"});
})







app.listen(PORT, (e) => {
    console.log("Server is runnig on port: ", PORT);
})