//Rutas para autenticar usuarios
const app = require("express");
const router = app.Router();
const { check } = require("express-validator");
const { autenticarUsuario, usuarioAutenticado } = require("../controllers/auth");
const autenticacion = require("../middlewares/autenticacion");

//Crea un usuario
router.post( "/", [
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe ser minimo 6 caracteres").isLength({min: 6})
], autenticarUsuario );

router.get( "/", autenticacion, usuarioAutenticado )

module.exports = router;