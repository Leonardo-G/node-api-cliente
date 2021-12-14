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

const proyectoGet = async (req, res) => {

    try {
        const proyectos = await Proyecto.find({ creador: req.usuario.id });
        res.status(200).json(proyectos);

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Hubo un error"})
    }
}

const proyectoPut = async (req, res) => {
    //Revisamos si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }

    try {
        //Tambien podemos verificar si el id del usuario es el mismo que el creador

        //Extraer la informacion del proyecto
        const producto = await Proyecto.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true});
        res.json({producto})
        
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: "No existe el proyecto con ese id"})
    }
}

const proyectoDelete = async (req, res) => {
    try {
        const isExistProyecto = await Proyecto.findById(req.params.id);

        if(!isExistProyecto){
            return res.status(404).json({ msg: "Proyecto no encontrado" });
        }

        //Verificar el creador del proyecto
        if( isExistProyecto.creador.toString() !== req.usuario.id ){
            return res.status(401).json({ msg: "No estas autorizado a eliminar los proyecto"});
        }

        //Eliminar el proyecto
        await Proyecto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "Proyecto eliminado" })

    } catch (error) {
        console.log(error)
        res.status(400)
    }
}

module.exports = {
    proyectoPost,
    proyectoGet,
    proyectoPut,
    proyectoDelete
}