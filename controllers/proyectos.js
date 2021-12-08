const { validationResult } = require("express-validator");
const Proyecto = require("../models/Proyecto")

const proyectoPost = async ( req, res ) => {

    //Revisamos si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }

    const { nombre } = req.body;

    try {
        const proyecto = new Proyecto({ nombre, creador: req.usuario.id });
        
        await proyecto.save();

        res.status(201).json(proyecto);
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: "Hubo un error"})
    }
}

module.exports = {
    proyectoPost
}