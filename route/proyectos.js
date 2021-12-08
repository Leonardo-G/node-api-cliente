const app = require("express");
const { check } = require("express-validator");
const { proyectoPost } = require("../controllers/proyectos");
const autenticacion = require("../middlewares/autenticacion");
const router = app.Router();

//Crea proyectos
router.post("/", autenticacion, [
    check("nombre", "Se requiere el nombre del proyecto").not().isEmpty(),
], proyectoPost )

module.exports = router