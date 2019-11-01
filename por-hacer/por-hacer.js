const fs = require('fs');

let listadoPorHacer = [];

const crear = (descripcion) => {
  cargarDB();
  let porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  guardarBD();
  return porHacer;
}

const guardarBD = () => {
  /**convertir los datos en json para poder escribirlos en el
   * documento .json
   */
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile(`db/data.json`, data, (error) => {
    if (error) throw new Error('No se pudo grabar', error);
  });
}

const cargarDB = () => {
  /**Excepcion cuando la db este vacio */
  try {
    /**extrae los datos de .json y los inserta en el arreglo */
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }
}

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
  cargarDB();
  /**finIndex busca el indice que coincida con la descripcion */
  let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarBD();
    return true;
  } else {
    return false;
  }
}

const eliminar = (descripcion) => {
  cargarDB();
  /**filter devulve un arreglo con los datos que encuentre */
  let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
  if (nuevoListado.length === listadoPorHacer.length) {
    return false;
  } else {
    listadoPorHacer = nuevoListado;
    guardarBD();
    return true;
  }
}

module.exports = {
  crear,
  getListado,
  actualizar,
  eliminar
}