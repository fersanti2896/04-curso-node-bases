
const { demandOption } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    }, 
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false
                    }
                })
                .check((argv, options) => {
                    if(isNaN(argv.base)) {
                        throw 'La base tiene que ser un número'
                    }
                    return true
                })
                .argv

    

console.clear();
// const base = 2;

/* Argumentos de consola - Primera Forma no recomendada */
/* const [, , arg3 = 'base=1'] = process.argv;
console.log(arg3);

const [, base = 1] = arg3.split('=');
console.log(base); */

/* Uso de argv */
console.log(argv);
console.log('Base dado por yargs:', argv.b);
console.log('Listar dado por yargs:', argv.l);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(console.log);
