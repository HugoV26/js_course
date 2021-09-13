/*
Ejercicio 2. En un hospital de la Ciudad de México se creó un esquema para determinar los gastos médicos que un paciente tendrá que pagar por concepto de servicio hospitalario solicitado.

Crea un programa que permita calcular el costo de internación de un cliente según los datos en la siguiente tabla:

Tratamiento     Costo por persona por día (MXN)
    1               2800
    2               1950
    3               2500
    4               1150

El hospital tiene la política de otorgar un descuento del 25% sobre el total de los gastos a los pacientes mayores de 60 años y a los clientes menores de 25 años se les otorga un 15% de descuento.
*/

/* 
Tarea 2: 
    Con base al ejercicio 2, realizar un programa que: 
        + Valide la edad, el tratamiento y los dias. (Deben de ser positivos y estar dentro de un rango si es el caso). 
        + Pueda ingresar más de un paciente

    Al terminar la ejecución, deberá de preguntarle al usuario si quiere ingresar nuevos pacientes.

    Ejemplo de flujo del programa:
    
        Cuantos pacientes quieres ingresar?  2

        Ingresa la edad de paciente 1
        Ingresa la edad de paciente 2
        Ingresa la edad de paciente n

        Ingresa el tratamiento del paciente 1
        Ingresa el tratamiento del paciente 2
        Ingresa el tratamiento del paciente n

        Ingresa los dias del paciente 1
        Ingresa los dias del paciente 2
        Ingresa los dias del paciente n

        El costo del paciente 1 sera de: valor
        El costo del paciente 2 sera de: valor
        El costo del paciente n sera de: valor

        ¿Quieres ingesar nuevos pacientes? Si
        
*/



let patient_age = 0
let treatment = parseInt(prompt("Ingresa el número del tratamiento: "));
let days = parseInt(prompt("Ingresa el número de días que estará internado el paciente: "));
let cost = 0;
let total = 0;
                    //and --> &&
                    //or --> ||
while (patient_age <= 0) {
    patient_age = parseInt(prompt("Ingresa la edad del paciente: "));
}


if (patient_age < 0 || treatment <= 0 || treatment > 4 || days < 1) {
    console.log("Ingresaste un dato erróneo, vuelve a intentarlo");
} else {
    switch (treatment) {
        case 1:  //if (treatment == 1)
            console.log("Tratamiento número: ", treatment);
            cost = 2800;
            if (patient_age > 60) {
                total = (cost - (cost * 0.25)) * days;
                console.log(`El costo total de internación es de $${total}MXN`);
            }else if (patient_age < 25) {
                total = (cost - (cost * 0.15)) * days;
                console.log(`El costo total de internación es de $${total}MXN`);
            }else{
                total = cost * days;
                console.log(`El costo total de internación es de $${total}MXN`);
            }
            break;

        case 2:
            console.log("Tratamiento 2")
            break;
        
        case 3:
            console.log("Tratamiento 3")
            break;

        case 4:
            console.log("Tratamiento 4")
            break;

        default:
            console.log("Entra en caso de que no tome el valor de ningún case")
            break;
    }
}
