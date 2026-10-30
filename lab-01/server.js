
const express = require("express");

const app = express();
const PORT = 3000;

// Log the request method, URL, and status code
app.use((req, res, next) => {
    res.on("finish", () => {
        console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
    });
    next();
});

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Node.js and Express server!");
});

app.get("/about", (req, res) => {
    res.status(200).json({
        name: "Bairi Shivanath",
        section: "S-15"
    });
});

app.get("/time", (req, res) => {
    res.status(200).json({
        currentDateTime: new Date().toString()
    });
});

app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

app.listen(PORT, () => {
    console.log(`Express server running at http://localhost:${PORT}`);
});
