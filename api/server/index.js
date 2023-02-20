import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../routes/index.js"
import functions from "firebase-functions"

import VerifyToken from "./middleware/VerifyToken.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(VerifyToken);

app.use("/", router); 

export const expressApi = functions.https.onRequest(app);