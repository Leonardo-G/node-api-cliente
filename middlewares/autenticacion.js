const jwt = require("jsonwebtoken");

const autenticacion = ( req, res, next ) => {
    //Leer el token del header
    const token = req.header("x-auth-token");
    
    //Revisar si no hay token
    if(!token){
        return res.status(401).json({ msg: "No hay un token, permiso no válido" });
    }

    //Validar token
    try {
        const cifrado = jwt.verify(token, process.env.SECRETA);
        req.usuario = cifrado.usuario
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({ msg: "Token no válido" })
    }
}

module.exports = autenticacion