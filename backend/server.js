import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound,errorHandler } from "./middleware/errorMidleware.js";
import productsRoutes from "./routes/productRoutes.js";
import usersRoutes from "./routes/userRoutes.js";
//const port = 5000;
const port = process.env.PORT || 5000;
connectDB(); // Connect to the database;

const app = express();

app.get("/", (req, res) => {    //app.get() defines a GET route that responds to incoming GET requests.
    res.send("API is running"); //res.send() sends a response back to the client.
});

app.use("/api/products", productsRoutes);
app.use("/api/users", usersRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {        //app.listen() starts the server and listens for incoming requests on the specified port.
    console.log(`Server is running on port ${port}`);
});

