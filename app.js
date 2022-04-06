
const argv = require('./config/yargs');
const { crearArchivoTabla } = require('./helpers/multiplicar');
const  colors = require('colors');

console.clear();


 
    
const { base, listar, hasta} = argv;
 
// const [,, arg3 = 'base=5' ] = process.argv;
// const [, base ] = arg3.split('=');



crearArchivoTabla(base,listar,hasta);
