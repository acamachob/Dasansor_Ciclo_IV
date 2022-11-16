const express = require("express");
const router = express.Router();
const ejecucionesController = require("../controllers/ejecuciones.controller");

router.post("/", ejecucionesController.create)
router.get("/", ejecucionesController.find)
router.get("/:id", ejecucionesController.findOne)
router.put("/:id", ejecucionesController.update)
router.delete("/:id", ejecucionesController.remove)
module.exports = router