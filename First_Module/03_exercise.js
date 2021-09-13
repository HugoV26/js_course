/*

Ejercicio 3. Escribe un programa que, al recibir un listado de números enteros positivos, obtenga la suma de los números pares y su promedio, la suma de los números impares y su promedio.

*/

             //0, 1, 2,   3,  4,    5
let myArray = [0, 2, 26, 65, 12]
let array_par = []
let array_impar = []
let prom = 0;
                                  //5
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index])
    const data = myArray[index]

    if (data % 2 == 0){
        array_par.push(data);
    }else{
        array_impar.push(data);
    }
}

//Suma de pares y su promedio
let suma= 0;
for (let index = 0; index < array_par.length; index++){
    suma += array_par[index]
    
    // suma = suma + element --> 0 + 0
    // suma = suma + element --> 0 + 2
    // suma = suma + element --> 2 + 26
}
let promedio = suma / array_par.length
console.log(`La suma de los numeros pares es ${suma} y su promedio es ${promedio}.`)

                        // index = index + 1
for (let index = 0; index < 5; index++) {
    console.log(index)
}


let alcohol = ['Whisky', 'Cerveza', 'Tequila'];

alcohol.forEach(element => {
    console.log(element)
});
