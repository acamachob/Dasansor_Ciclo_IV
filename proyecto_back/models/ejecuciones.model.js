const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EjecucionesSchema = new Schema({
    num_orden:{type: String, required: true, max:120},
    valor_orden:{type: String, required: true, max:150},
    fecha_asignacion:{type: String, required: true, max:100},
    actividad:{type: String, required: true, max:100},
    nombre_sitio:{type: String, required: true, max:100},
    fecha_instalacion:{type: String, required: true, max:100},
    fecha_integracion:{type: String, required: true, max:100},
    fecha_documentacion:{type: String, required: true, max:100}
});

module.exports = mongoose.model("ejecuciones", EjecucionesSchema); 