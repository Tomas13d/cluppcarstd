const express = require("express");
const {
  addNewVehicle,
  getActiveVehicles,
  getVehicleById,
  updateDeletedVehicle,
  searchVehicle,
} = require("../controllers/vehiculesControllers");
const VehiculesRouter = express.Router();

VehiculesRouter.post("/", addNewVehicle);
VehiculesRouter.get("/", getActiveVehicles);
VehiculesRouter.get("/search/:text", searchVehicle);
VehiculesRouter.get("/:id", getVehicleById);
VehiculesRouter.put("/:id", updateDeletedVehicle);

module.exports = VehiculesRouter;
