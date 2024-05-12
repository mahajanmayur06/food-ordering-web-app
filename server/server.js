import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import credentials from "./middlewares/credentials.js";
import corsOptions from "./config/corsOptions.js";
import dbConn from "./config/dbConn.js";
import { config as configDotenv } from "dotenv"; 

const app = express();
configDotenv(); 

const PORT = 3500;

dbConn()
app.use(cors(corsOptions))
app.use(credentials);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


mongoose.connection.once('open', () => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})