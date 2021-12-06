const express = require("express");

//Crando el server.
const app = express();

//Puerto de la aoo
const port = process.env.PORT || 4000;


//Arrancando la app
app.listen(port, () => {
    console.log("Servidor iniciado", port)
})