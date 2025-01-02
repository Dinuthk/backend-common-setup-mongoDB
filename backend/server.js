import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
//const port = 5000;
const port = process.env.PORT || 5000;
connectDB(); // Connect to the database;

const app = express();

app.get("/", (req, res) => {    //app.get() defines a GET route that responds to incoming GET requests.
    res.send("API is running"); //res.send() sends a response back to the client.
});

app.get("/api/products", (req, res) => {
    res.send(products);
})

app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.send(product);
})














app.listen(port, () => {        //app.listen() starts the server and listens for incoming requests on the specified port.
    console.log(`Server is running on port ${port}`);
});

