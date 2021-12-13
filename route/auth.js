//Rutas para autenticar usuarios
const app = require("express");
const router = app.Router();
const { check } = require("express-validator");
const { autenticarUsuario, usuarioAutenticado } = require("../controllers/auth");
const autenticacion = require("../middlewares/autenticacion");

//Crea un usuario
router.post( "/", autenticarUsuario );

router.get( "/", autenticacion, usuarioAutenticado )

module.exports = router;