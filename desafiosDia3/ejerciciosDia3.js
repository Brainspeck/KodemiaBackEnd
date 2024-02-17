//ejercicio 1
let persona1 = {
    nombre: 'Erik',
    edad: 29,
    ciudad: 'cdmx'
}

const printProperty = (object) => {
    return persona1.ciudad;
}

console.log(printProperty(persona1));

//ejercicio 2

let objetoVacio = {};

const createProperty = (object) => {
    object.mes = 'abril';

    return object.mes;
}

console.log(createProperty(objetoVacio));

//ejercicio 3

let iphone = {
    nombre: 'iPhone 14 pro max',
    precio: 25000,
    capacidad: '256gb'
}
let pixel = {
    nombre: 'pixel pro 9',
    precio: 18000,
    capacidad:'256gb'
}

const compareObjects = (product1, product2) => {
    if (product1.nombre === product2.name && product1.precio === product2.precio && product1.capacidad === product2.capacidad){
        return true;
    }
    else return false;
}

console.log(compareObjects(iphone,pixel));