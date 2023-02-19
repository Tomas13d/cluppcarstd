import express from "express";
import cors from "cors"; 
import dotenv from "dotenv"; // Add to import list

dotenv.config(); 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors()); 

const routes = require("../routes/index");
app.use("/", routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});