const { validationResult } = require("express-validator");
const Tarea = require("../models/Tarea");
const Proyecto = require("../models/Proyecto");

//Crea una nueva tarea
const tareaPost = async ( req, res ) => {
    //Revisamos si hay errores
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores: errores.array() })
    }

    //Extraer el proyecto y comprobar si existe
    const{ proyecto } = req.body;

    try {
        const isExistProyecto = await Proyecto.findById( proyecto );
        if(!isExistProyecto){
            return res.status(404).json({ msg: "Proyecto no encontrado"})
        }

        //Revisar si el proyecto actual pertenece al usuario autenticado
        if( isExistProyecto.creador.toString() !== req.usuario.id ){
            return res.status(401).json({ msg: "No estas autorizado a eliminar los proyecto"});
        }

        //Crear la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();

        res.status(201).json(tarea)

    } catch (error) {
        console.log(error)
    }
}

//Obtener tareas
const tareaGet = async ( req, res ) => {
      //Extraer el proyecto y comprobar si existe
      const { id } = req.params
      
      try {
          const isExistProyecto = await Proyecto.findById( id );
          if(!isExistProyecto){
              return res.status(404).json({ msg: "Proyecto no encontrado"})
          }
      
          //Revisar si el proyecto actual pertenece al usuario autenticado
          if( isExistProyecto.creador.toString() !== req.usuario.id ){
              return res.status(401).json({ msg: "No estas autorizado a obtener los proyecto"});
          }
          
          //Obtener las tareas por proyecto
          const tareas = await Tarea.find({ proyecto: id });
          res.status(200).json(tareas)
      } catch (error) {
          console.log(error);
      }
}

const tareaPut = async ( req, res ) => {
    try {
        //Si la tarea existe o no
        const tareaExiste = await Tarea.findById(req.params.id);
        if(!tareaExiste){
            return res.status(404).json({ msg: "No existe la tarea"})
        }

        //Guardar la tarea
        const producto = await Tarea.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {new:true});
        res.json(producto);

    } catch (error) {
        console.log(error)
    }
}

const tareaDelete = async ( req, res ) => {
    try {
        //Si la tarea existe o no
        const tareaExiste = await Tarea.findById(req.params.id);
        if(!tareaExiste){
            return res.status(404).json({ msg: "No existe la tarea"})
        };

        //Eliminar 
        await Tarea.findOneAndRemove({_id: req.params.id});
        res.json({msg: "Tarea eliminada"})

    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    tareaPost,
    tareaGet,
    tareaPut,
    tareaDelete
}