//Rutas para crear usuarios
const app = require("express");
const { usuariosPost } = require("../controllers/usuarios");
const router = app.Router();
const { check } = require("express-validator");

//Crea un usuario
router.post( "/", [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe ser minimo 6 caracteres").isLength({min: 6})
], usuariosPost );

module.exports = router;