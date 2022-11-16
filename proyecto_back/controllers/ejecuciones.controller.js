const Ejecucion = require("../models/ejecuciones.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let ejecucion = new Ejecucion({
        num_orden: req.body.num_orden,
        valor_orden: req.body.valor_orden,
        fecha_asignacion: req.body.fecha_asignacion,
        actividad: req.body.actividad,
        nombre_sitio: req.body.nombre_sitio,
        fecha_instalacion : req.body.fecha_instalacion,
        fecha_integracion : req.body.fecha_integracion,
        fecha_documentacion : req.body.fecha_documentacion
    })
    ejecucion.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar la ejecucion"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "la ejecucion se guardó correctamente"
        res.json(response)
    })
}

//funcion de encontrar todos los datos de la tablas (find es encontrar o buscar)
exports.find = function(req,res){

    Ejecucion.find(function(err, ejecuciones){
        res.json(ejecuciones);
    })
}

//buscar uno solo 
exports.findOne = function(req,res){
    Ejecucion.findOne({_id: req.params.id},function(err, ejecucion){
        res.json(ejecucion)
    })
}

//funcion actaulizar
exports.update = function(req,res){
    let ejecucion = ({
        num_orden: req.body.num_orden,
        valor_orden: req.body.valor_orden,
        fecha_asignacion: req.body.fecha_asignacion,
        actividad: req.body.actividad,
        nombre_sitio: req.body.nombre_sitio,
        fecha_instalacion : req.body.fecha_instalacion,
        fecha_integracion : req.body.fecha_integracion,
        fecha_documentacion : req.body.fecha_documentacion
    })

    Ejecucion.findByIdAndUpdate(req.params.id,{$set: ejecucion},function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar la ejecucion"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La ejecucion se guardó correctamente"
        res.json(response)
    })
}

//funcion eliminar
exports.remove = function(req,res){
    Ejecucion.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar la ejecucion"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La ejecucion se eliminó correctamente"
        res.json(response)
    })                               
} 