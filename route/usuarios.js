//Rutas para crear usuarios
const app = require("express");
const { usuariosPost } = require("../controllers/usuarios");
const router = app.Router();

//Crea un usuario
router.post( "/", usuariosPost );

module.exports = router;