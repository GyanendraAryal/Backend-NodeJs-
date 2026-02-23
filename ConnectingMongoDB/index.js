import express from "express";
import mongoose from "mongoose";
import user from "./MOCK_DATA.json" with { type: "json" };


const app = express();
const PORT = 8000;



app.get("/", (req, res) => {
    return res.send("Hello I'm from Home Page");
})

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((users) => users.id === id)
    const html =`
    <ul>
        ${users.map((users) => {
            return `<li>
                ${users.first_name};
            </li>`
        })}
    </ul>`
})

app.listen(PORT, (e) => {
    console.log("Server is running on Port: ", PORT);
})

