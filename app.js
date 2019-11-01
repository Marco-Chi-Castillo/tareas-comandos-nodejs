const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    porHacer.crear(argv.descripcion);
    break;
  case 'listar':
    let listado = porHacer.getListado();
    for (let tarea of listado) {
      console.log('======== Tarea ======='.green);
      console.log(tarea.descripcion);
      console.log(`Estado: ${tarea.completado}`);
      console.log('======================'.green);
    }
    break;
  case 'actualizar':
    porHacer.actualizar(argv.descripcion, argv.completado);
    break;
  case 'eliminar':
    porHacer.eliminar(argv.descripcion);
    break;
  default:
    console.log('comando no reconocido'.red);
    break;
}