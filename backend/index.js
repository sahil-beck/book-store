import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const mongoDBURL = process.env.MONGODB_URL;

app.use(cors({ 
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
})); 
app.use(express.json());
app.use('/books', bookRoute);

app.get('/', (request, response) => {
    console.log(request);
    return response.status(200).send("BookStore API");
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to database`);
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })