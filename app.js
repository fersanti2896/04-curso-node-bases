
const { demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

/* Uso de argv */
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo))
    .catch(console.log);
