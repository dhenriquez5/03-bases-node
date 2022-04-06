const fs = require('fs');
const colors = require('colors');


const crearArchivoTabla = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        console.log("==================================")
        for (let index = 1; index <= hasta; index++) {
            salida += (`${base} X ${index} = ${base * index} \r\n`);
        }
        if (listar) console.log(salida.rainbow);
        fs.writeFileSync(`./archivos/tabla-${base}.txt`, salida);
        console.log("Archivo Creado".green);
    } catch (error) {
        console.log("Error al crear archivo ".red, error)
    }

}
module.exports = { crearArchivoTabla }