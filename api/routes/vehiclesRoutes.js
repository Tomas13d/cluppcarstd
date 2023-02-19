import express from "express"
import {
  addNewVehicle,
  getActiveVehicles,
  getVehicleById,
  updateDeletedVehicle,
  searchVehicle,
} from "../controllers/vehiculesControllers.js";
const VehiculesRouter = express.Router();

VehiculesRouter.post("/", addNewVehicle);
VehiculesRouter.get("/", getActiveVehicles);
VehiculesRouter.get("/search/:text", searchVehicle);
VehiculesRouter.get("/:id", getVehicleById);
VehiculesRouter.put("/:id", updateDeletedVehicle);

export default VehiculesRouter;
