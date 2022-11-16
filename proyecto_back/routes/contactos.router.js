const { Router } = require("express");
const express = require("express");
const router = express.Router();
const contactosController = require("../controllers/contactos.controller");

router.post("/", contactosController.create);
router.get("/", contactosController.find);
router.get("/:id", contactosController.findOne);
router.delete("/:id", contactosController.remove);
module.exports = router;
