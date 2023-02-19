import express from "express"
import VehiculesRouter from "./vehiclesRoutes.js"
const router = express.Router();

router.use("/vehicles", VehiculesRouter);
export default router;
