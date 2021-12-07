const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const usuariosPost = async (req, res) => {

    //Revisamos si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }

    const { nombre, email, password } = req.body;

    const isExistEmail = await Usuario.findOne({ email });
    
    if(isExistEmail){
        return res.status(400).json({msg: "Ya existe el usuario"});
    }
    
    try {
        //Hashear el password
        const hash = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, hash);

        //Crea el nuevo usuario
        const usuario = new Usuario({ nombre, email, password: hashPassword });

        // //guarda el usuario
        await usuario.save();

        res.status(201).json(usuario);

    } catch (error) {
        console.log(error);
        res.status(400).json({msg: "Error al realizar POST"})
    }
}

module.exports = {
    usuariosPost,
}