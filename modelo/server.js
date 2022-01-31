const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
class server{
    constructor() {
        this.app = express();
        this.middlewares();
        this.rutas();
    }
    rutas() {
        this.app.get('/', function (req, res) {
            res.send('Hola mundo');
        });

        this.app.get('/saludo', function (req, res) {
            res.send('Hola mundo2');
        });

        this.app.get('*', function (req, res) {
            res.send(__dirname + 'public/404.html');
        });
    }

    listen() {
        this.app.listen(port, function(){
            console.log('Escuchando el puerto ${port}')
        });
    }


}
module.exports = Server;