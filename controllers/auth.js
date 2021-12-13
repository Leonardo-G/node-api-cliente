const Usuario = require("../models/Usuario");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const autenticarUsuario = async (req, res) => {
    //Revisamos si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }

    //Extraer el email y el password
    const { email, password } = req.body;

    try {
        //Revisar que sea un usuario registradp
        const usuario = await Usuario.findOne({ email });
        if(!usuario) {
            return res.status(400).json({ msg: "el usuario no existe"})
        }

        //Revisar el password
        const passCorrecto = await bcrypt.compare(password, usuario.password);
        if(!passCorrecto){
            return res.status(400).json({msg: "Password incorrecto"})
        }

        //Si todo es correcto  crea y firma el JWT.
        const payload = {
            usuario:{
                id: usuario.id
            }
        };

        //Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if( error ) throw error;
            res.status(201).json({token});
        })

    } catch (error) {
        res.status(404).json({msg: "error al autenticar"})
    }
}

const usuarioAutenticado = async ( req, res ) => {
    try {
        const usuario = await Usuario.findById( req.usuario.id ).select("-password");
        res.json({ usuario })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Hubo un error" })
    }
}

module.exports = {
    autenticarUsuario, 
    usuarioAutenticado
}