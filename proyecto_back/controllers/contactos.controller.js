const Contacto = require("../models/contactos.model");
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let contacto = new Contacto({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    mensaje: req.body.mensaje,
  });
  contacto.save(function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al guardar al contacto");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El contacto se guardo correctamente");
    res.json(response);
  });
};

exports.find = function (req, res) {
  Contacto.find(function (err, contactos) {
    res.json(contactos);
  });
};

exports.findOne = function (req, res) {
  Contacto.findOne({ _id: req.params.id }, function (err, contacto) {
    res.json(contacto);
  });
};

exports.remove = function (req, res) {
  Contacto.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar al contacto");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El contacto se elimino correctamente");
    res.json(response);
  });
};
