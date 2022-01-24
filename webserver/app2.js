const express = require('express')
const app = express()
app.use(express.static('public'));
const port = process.env.PORT;

app.use(express.static('public'));
app.get('/', function (req, res) {
    res.send('Hola mundo');
});

app.get('/saludo', function (req, res) {
    res.send('Hola mundo2');
});

app.get('*', function (req, res) {
    res.send(__dirname + 'public/404.html');
});

app.listen(port);
console.log('Escuchando el puerto 3001');