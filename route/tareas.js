const app = require("express");
const { check } = require("express-validator");
const { tareaPost, tareaGet, tareaPut, tareaDelete } = require("../controllers/tareas");
const autenticacion = require("../middlewares/autenticacion");
const router = app.Router();

router.post("/", autenticacion, [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("proyecto", "El proyecto es obligatorio").not().isEmpty(),
], tareaPost);

router.get("/:id", autenticacion, tareaGet);

router.put("/:id", autenticacion, tareaPut);

router.delete("/:id", autenticacion, tareaDelete)

module.exports = router