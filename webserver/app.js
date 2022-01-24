const http = require('http');

const miserver = http.createServer((req, res) => {
    res.write(200,
        { 'Content-Type': 'application/json' });
    const persona = { id: 1, nombre: 'Pepe' };
    res.write(JSON.stringify(persona));
    res.end();
})

miserver.listen(8081);
console.log('Escuchando el puerto');