const express = require("express");
const router = express.Router();
const vehicles = require("./vehiclesRoutes");

router.use("/vehicles", vehicles);
module.exports = router;
