const express = require('express');
const app = express();

let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to the home page babyyy!!")
})

app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})