/* Funciones */

function showMessage()
{
    console.log("Hola mundo");
}

showMessage();

let myVariable = 5;

function multi()
{
    myVariable *= 2;
}

multi();
console.log(myVariable);


for (let index = 0; index < 10; index++) {
    
    multi();
    
}

console.log(myVariable);

function test(param1, param2)
{
    param1 = param2 * 3;
    return param1
}

let res = test(10, 12)

console.log(res)

/*Funciones  Anónimas*/

function sumatoria(a, b)
{
    let total = a + b;
    return total;
}


let sumatoriaAnonima = (function(a, b){
    let total = a + b;
    return total;
})(5, 2);

//console.log(sumatoriaAnonima(4, 2));


function myFunction(name){
    return `Hola ${name}`
}

const name = 'Batman';
console.log(myFunction(name));


myFunction = 'Te he hackeado';
console.log(myFunction);

const saludo = function(name) {
    return `Hola ${name}`
}

const name2 = 'Goku'
console.log(saludo(name2))

//saludo = 'Hola mundo'
console.log(saludo)

//Función Flecha

const sumatoriaAnonimaFlecha = (a, b) => {
    console.log(a+b);
}

const sumaAnonimaFlechaAuto = ((x, y) => {
    let total = x * y;
    return total;
})(2, 20);

console.log(sumaAnonimaFlechaAuto);



/*
Ejercicio 1:
Registro de calificaciones
Escribe un programa que, al recibir un listado de calificaciones de un grupo de becarios inscritos a la capacitación de Tu Nerd, calcule y escriba el número de calificaciones que hay en cada uno de los siguientes rangos.

Rangos
0 a 3.99
4 a 5.99
6 a 7.99
8 a 8.99
9 a 10
El programa debe, además, calcular el promedio de calificación del grupo.
*/

let array = [10, 9, 8.5, 8, 3.3, 0, 9.6, 3.2, 15, 8, 7.96, 6.445];

//Calificaciones en el rango de 8 a 8.99: 
// Calificaciones en el rango de 9 a 10: 3

let califications = (array) => {

    let count_index = array.length; //12  --> 
    let contador = 0;
    //let contador2 = 0;
    //let contador3 = 0;
    //let contador4 = 0;
    //let contador5 = 0;
    let count = [0, 0, 0, 0, 0];

    for (let index = 0; index < array.length; index++) {

        const calificacion = array[index];
    
        if (calificacion >= 0 && calificacion <= 3.99 ){
            count[0] += 1; 
            contador += calificacion;
            

        }else if (calificacion >= 4 && calificacion <= 5.99){
            count[1] += 1;
            contador += calificacion;
        }else if (calificacion >= 6 && calificacion <= 7.99){
            count[2] += 1;
            contador += calificacion;
        }else if (calificacion >= 8 && calificacion <= 8.99){
            count[3] += 1;
            contador += calificacion;
        }else if (calificacion >= 9 && calificacion <= 10){
            count[4] += 1;
            contador += calificacion;
        }else{
            console.log(`La calificacion ${calificacion} no entra en ningún rango`);
            count_index -= 1;
        }
    }
    console.log(`El número de calificaciones que estuvieron en el rango de 0 - 3.99 es: ${count[0]}`)
    console.log(`El número de calificaciones que estuvieron en el rango de 4 - 5.99 es: ${count[1]}`)
    console.log(`El número de calificaciones que estuvieron en el rango de 6 - 7.99 es: ${count[2]}`)
    console.log(`El número de calificaciones que estuvieron en el rango de 8 - 8.99 es: ${count[3]}`)
    console.log(`El número de calificaciones que estuvieron en el rango de 9 - 10 es: ${count[4]}`)
    console.log(`El promedio es: ${contador/count_index}`);

}

califications(array);



/*
Ejercicio 2: Temperatura local
En la ciudad de Gotham se llevó a cabo un registro de la temperatura alcanzada en verano cada hora durante un día. Encuentra la temperatura promedio registrada, así como la temperatura máxima y la temperatura mínima con el horario en el cual se registraron.


Temperatura[0] = 12.30   -> 0 horas
*/

let array_t = [10, 24.3, -3, 15, 10.4, -1, 24.3, 30.1, 8.2, 26, 24.2, 13.5, -6.2, 25.4, 31, 40, 3.2, 12.3, 14.68, 20, 34, 17.5, 11.4, 27.6];


let temperature = (array_t) => {

    let temp_count = 0;
    let maximum_sample = 0;
    let minimum_sample = 0;

    array_t.forEach(element => {
        temp_count += element;

        if (element > maximum_sample){
            maximum_sample = element;

        }else if (element < minimum_sample){
            minimum_sample = element;
        }

        
    });
    console.log(`La temperatura promedio fue de: ${temp_count/array_t.length}`)

    console.log(`La temperatura máxima fue de ${maximum_sample}°C y se registro a las ${array_t.indexOf(maximum_sample)} hrs`)
    
    console.log(`La temperatura máxima fue de ${minimum_sample}°C y se registro a las ${array_t.indexOf(minimum_sample)} hrs`)
}

temperature(array_t);