/*
*En vez de poner function, lo quitamos y lo ponemos con un = y una =>
*/
crearArchivo = (base = 5) => {
/*
bucle de como hacer las tablas de multiplicar
*/
    const fs = require('fs');


    console.clear();
    console.log('===========================');
    console.log('       tabla del: ', base);
    console.log('===========================');

    const base = 5;
    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += '${ base } x ${ i } = ${base * i }\n';
    }
    console.log(salida);

    fs.writeFile('tabla-${base}.txt', salida, function (err) {
        if (err) throw err;
    })

    function multiplicaPorDos( n ) {
        return n * 2;
    }

}

module.exports = {crearArchivo:crearArchivo, multiplicaPorDos:multiplicaPorDos};