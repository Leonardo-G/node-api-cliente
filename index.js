const express = require("express");
const conectarDB = require("./db/config");

//Crando el server.
const app = express();

//Conectar base de datos
conectarDB();

//habilitar express.json
app.use(express.json());

app.use("/api/usuarios", require("./route/usuarios"));
app.use("/api/auth", require("./route/auth"));
app.use("/api/proyectos", require("./route/proyectos"));
app.use("/api/tareas", require("./route/tareas"));

//Puerto de la aoo
const port = process.env.PORT || 4000;

//Arrancando la app
app.listen(port, () => {
    console.log("Servidor iniciado", port)
})