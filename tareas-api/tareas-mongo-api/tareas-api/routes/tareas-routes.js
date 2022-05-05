const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareas-Controller");

router.post("/", tareaController.createTarea);
router.put("/:id", tareaController.updateTarea);
router.get("/", tareaController.findAllTareas);
router.delete("/:id", tareaController.deleteTarea);

module.exports = router;