
const { crearArchivo } = require('./helpers/multiplicar');

console.clear();
// const base = 2;

/* Argumentos de consola - Primera Forma no recomendada */
const [, , arg3 = 'base=1'] = process.argv;
console.log(arg3);

const [, base = 1] = arg3.split('=');
console.log(base);

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(console.log);
