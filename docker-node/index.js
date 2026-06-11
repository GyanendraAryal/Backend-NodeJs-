import express from 'express'

const app = express();

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send({ message: "Hey, I'm node js in container and this message is to be seen on postman. Period" })
});

app.listen(PORT, () => {
    console.log("Server listening on port: ",PORT);
    
})