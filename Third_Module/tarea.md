Tarea 6: Objetos
Bienes raíces

Una empresa de bienes raíces en Nueva York lleva la información sobre las propiedades que tiene disponibles tanto para venta como para renta.

La estructura de sus registros está modelada por el siguiente objeto

    * Clave de la propiedad (Numérico)
    * Superficie total (Numérico)
    * Características (Cadena de texto)
    * Ubicación Geográfica
    * Zona (Cadena de texto)
    * Calle (Cadena de texto)
    * Numero (Numérico)
    * Código postal (Numérico)
    * Precio en Dólares (Numérico)
    * Disponibilidad (Carácter. V= Venta y R= Renta)

Escribe un programa que realice lo siguiente:

Un método que enlista las propiedades disponibles para venta en la zona de Central Park cuyo valor oscile entre 500,000 y 2.8M USD
Un método que al recibir una zona geográfica, un precio máximo y un precio mínimo, nos enlista todas las propiedades disponibles para rentar
Nota: El listado debe mostrar lo siguiente: Clave de la propiedad, superficie total, características, calle y número, código postal y precio.
Un método que imprima el número de propiedades registradas.


*/

let properties = [

    propertyOne = {
        key: 001,
        area: 70.4,
        features: 'Departamento con 1 recámara y un baño',
        geographicLocation: {
            zone: 'Financial District',
            street: '150 Nassau',
            number:  3,
            zip_code: 1044
        },
        price: 888000,
        availability: 'V'
    },
    propertyTwo = {
        key: 002,
        area: 138.5,
        features: 'Departamento con 2 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Central Park',
            street: '32 East',
            number:  702,
            zip_code: 1067
        },
        price: 2400000,
        availability: 'V'
    },
    propertyThree = {
        key: 003,
        area: 125.4,
        features: 'Departamento con 2 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Upper West Side',
            street: '255 West',
            number:  21,
            zip_code: 1104
        },
        price: 6500,
        availability: 'R'
    },
    propertyFour = {
        key: 004,
        area: 100.4,
        features: 'Departamento con 2 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Upper West Side',
            street: '25 West',
            number:  69,
            zip_code: 1104
        },
        price: 6500,
        availability: 'R'
    },
    propertyFive = {
        key: 005,
        area: 110.2,
        features: 'Departamento con 3 recámaras y 2 baños',
        geographicLocation: {
            zone: 'Central Park',
            street: '124 East',
            number:  6,
            zip_code: 1068
        },
        price: 6100,
        availability: 'R'
    },
    propertySix = {
        key: 006,
        area: 130,
        features: 'Departamento con 2 recámaras y 2.5 baños',
        geographicLocation: {
            zone: 'Central Park',
            street: '51 West',
            number:  32,
            zip_code: 2426
        },
        price: 750000,
        availability: 'V'
    }
]