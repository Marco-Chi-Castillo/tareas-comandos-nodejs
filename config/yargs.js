let descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
}

let completado = {
  default: true,
  alias: 'c',
  desc: 'Marco como completado o pendiente una tarea'
}

const argv = require('yargs')
  .command('crear', 'crea una nueva tarea por hacer', {
    descripcion
  })
  .command('actualizar', 'actualiza el estado completado de una tarea', {
    descripcion,
    completado
  })
  .command('eliminar', 'elimina la tarea', {
    descripcion
  })
  .help()
  .argv;

module.exports = {
  argv
}