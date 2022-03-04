const fs =  require('fs');

const crearArchivo = async(base = 1) => {
    try {
        console.log('=======================');
        console.log('    Tabla del:', base);
        console.log('=======================');

        let salida = '';

        for(let i = 0; i < 10; i++){
            salida += `${base} x ${i + 1} = ${(i+1) * base}\n`
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `Archivo tabla-${base}.txt creada!`
    } catch (err){
        throw err;
    }
}

/* Exportando */
module.exports = {
    crearArchivo
}