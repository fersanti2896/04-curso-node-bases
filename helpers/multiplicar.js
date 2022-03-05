const fs =  require('fs');
const color = require('colors');

const crearArchivo = async(base = 1, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++){
            salida += `      ${ base } x ${ i } = ${ i * base }\n`
            consola += `      ${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ i * base }\n`
        }

        if(listar) {
            console.log('========================'.rainbow);
            console.log(`     Tabla del: ${base}       `.green);
            console.log('========================'.rainbow);
            console.log(consola);
        } 
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Archivo tabla-${base}.txt creada!`.cyan
    } catch (err){
        throw err;
    }
}

/* Exportando */
module.exports = {
    crearArchivo
}