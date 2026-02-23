import express from "express";
import users from "./MOCK_DATA.json" with { type: "json" }


const app = express();
const PORT = 8000;

//Middlewares
app.use(express.urlencoded({ extended: false }));//It allows your server to read form data sent from HTML forms.

app.use((req,res, next) =>{
    console.log("Hello from Middleware 1");
    req.Nameee="Gyanendra"
    /* res.end("Hello from middleware"); */
    next();
    
})

app.get("/", (req, res) => {
    console.log("Hello I'm from the Home Page!");   
    console.log(req.Nameee)
})

app.get("/users", (req, res) => {
    const html =
        `<ul>
            ${users.map((users) =>{ 
            return `<li>
                    ${users.first_name}
                </li>
                <li>
                    ${users.email}
                </li>`
            }).join("")}
    </ul>`

    return res.send(html);
})

app.get("/api/users/:id", (req, res) => {

    const userId = Number(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);

})



app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
})