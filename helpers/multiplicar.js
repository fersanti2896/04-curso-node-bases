const fs =  require('fs');

const crearArchivo = async(base = 1, listar = false) => {
    try {
        let salida = '';

        for(let i = 0; i < 10; i++){
            salida += `${base} x ${i + 1} = ${(i+1) * base}\n`
        }

        if(listar) {
            console.log('=======================');
            console.log('    Tabla del:', base);
            console.log('=======================');
            console.log(salida);
        } 
        
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