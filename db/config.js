const mongoose = require('mongoose');
require("dotenv").config({path: "variables.env"});

const conectarDB = async () => {
    try {
        await mongoose.connect( process.env.DB_MONGO );
        console.log("Base de datos conectada")
    } catch (error) {
        console.log("no se pudo conectar la app", error);
    }
}

module.exports = conectarDB;