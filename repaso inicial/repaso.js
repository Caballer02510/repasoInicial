const dividir = require("./mod_promesas");

const persona = {
    nombre: 'Juan',
    apellido: 'Lopez',
    departamento: 'Informático',
    getNombre: function () {
        return '${this.nombre} ${this.apellido} depto: ${this.departamento}'
    }
}
// let nombre = persona.nombre;
// let apellido = persona.apellido;
// let departamneto = persona.departamneto;

let { nombre, apellido, departamento } = persona;
console.log(nombre, apellido, 'depto: ', departamneto)

// console.log(persona.getNombre());

const plantilla = ['Juan', 'María', 'Marco'];
let [n1, n2, n3] = plantilla;
console.log(n1, n2, n3);

const suma = (n1, n2) => {
    return n1 + n2;
}

console.log('suma: ', suma(3, 4))
setTimeout(() => { console.log('Hola mundo') }, 1500)

const getUsuarioById = (id, callback) => {
    const usuario = {
        id: id,
        nombre: '',
    }
    
    const plantilla = [{
        id: 1,
        nombre: 'Juan'
    },{
    id: 2,
        nombre: 'Maria'
        }]
    const miPromesa = new Promise(
        (resolve, reject) => {
            let usuario = plantilla.find(persona => persona.id == id)?.nombre;
            if (usurio) {
                resolve(usuario)
            } else {
                reject('Error usuario con id${id} NO EXISTE')
            }
        }
    )
    return miPromesa;
    
    
    setTimeout(() => {
        let usuario = plantilla.find(persona => persona.id === id)?.nombre;
        callback(usuario);
    }, 1500)
}

getUsuarioById(5, (usu) => {
    
    console.log('Nombre: ' + usu)})


    //promesas
const miPromesa = new Promise(
    (resolve, reject) => {
        reject('Todo mal');
        resolve('Todo bien');
        }
)
    
getUsuarioById(1)
    .then((usuario) => console.log('Usuario encontrado: ' + usuario))
    .catch((msg) => console.log(msg))
    

dividir(8, 2)
    .then(function (resultado) { console.log('resultado ${resultado}') })
    .catch((msg) => console.log(msg));





