const app = require("express");
const { check } = require("express-validator");
const { proyectoPost, proyectoGet, proyectoPut, proyectoDelete } = require("../controllers/proyectos");
const autenticacion = require("../middlewares/autenticacion");
const router = app.Router();

//Crea proyectos
router.post("/", autenticacion, [
    check("nombre", "Se requiere el nombre del proyecto").not().isEmpty(),
], proyectoPost )

router.get("/", autenticacion, proyectoGet);

router.put("/:id", autenticacion, proyectoPut);

router.delete( "/:id", proyectoDelete );



module.exports = router