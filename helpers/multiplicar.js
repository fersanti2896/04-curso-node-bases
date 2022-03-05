const fs =  require('fs');
const color = require('colors');

const crearArchivo = async(base = 1, listar = false) => {
    try {
        let salida = '';

        for(let i = 0; i < 10; i++){
            salida += `      ${base} ${'x'.red} ${i + 1} ${'='.red} ${(i+1) * base}\n`
        }

        if(listar) {
            console.log('========================'.rainbow);
            console.log(`     Tabla del: ${base}       `.green);
            console.log('========================'.rainbow);
            console.log(`${salida}`);
        } 
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `Archivo tabla-${base}.txt creada!`.cyan
    } catch (err){
        throw err;
    }
}

/* Exportando */
module.exports = {
    crearArchivo
}