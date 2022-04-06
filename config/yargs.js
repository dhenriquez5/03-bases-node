const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');


const argv = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false,
    describe: 'muestra en console la tabla de multiplicar'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Hasta donde queres multiplicar'
})
.check((argv, options) => {
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un número'
    }
    return true;
})
.argv


module.exports=argv;