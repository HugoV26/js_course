console.log("Hola mundo");

var myVar = 26;
let myLet = "Hola";
const PI = 3.14;

/*
    * Tarea 1: Investigar la diferencia entre let y var. Poner un ejemplo.
*/


/*
Ejercicio 1
Se requiere calcular el precio de ida y vuelta en avión, conociendo tanto la distancia entre las dos ciudades como el tiempo de estancia en la ciudad destino.

Si el número de días de estancia es superior a 10 y la distancia total (ida y vuelta) a recorrer es superior a 500km, el precio del billete se reduce en 20%. El precio por km es de $0.19.
*/


let distance = prompt("Ingresa la distancia entre las dos ciudades: ");
let days = prompt("Ingresa los dias de estancia: ");
const km = 0.19;
let total = distance * km;
let total_distance = distance * 2;


let Name = 'Sara'
let name = 'Rorro'

console.log(Name);
console.log(name);

let x = '2'
x = parseInt(x)
console.log(typeof(x))

let s = 8
s = String(s)
console.log("Valor de s: ", s)

console.log(2 + '2');
let a = 12.3;
let b = '2.0';
let c = a * b
console.log(typeof(c))
console.log(12.3 - '2.0');

console.log(typeof(distance));

if (days > 10 && total_distance > 500){

    total = total - (total * 0.2);
    console.log(`Se ha aplicado un descuento de 20% al precio final del viaje.\n Monto a pagar: ${total} MXN`);
}else{ 
    console.log(`Monto final: ${total}MXN`);
}


/*
if (condition) {
    
} if (condition) {
    
} else {
    
}
*/
