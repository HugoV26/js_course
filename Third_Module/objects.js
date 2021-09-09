/* Declaración de Objetos */

console.log("Declaración de Objetos");


let trainner = {

    name: 'Paco',
    age: 25,
    //country


    pokemon: {
        name: 'Charmander',
        type: 'Fire',
        enemy: {
            name: 'Squartle'
        }
    },

    showInfo: function () {
        
        console.log(`Ǹame: ${trainner.name}`)
        console.log(`Enemigo de mi pokemon: ${trainner.pokemon.enemy.name}`)
    },

    changeName: function(newName){
        let before = trainner.pokemon.name;
        trainner.pokemon.name = newName;
        return before
    }


}


console.log(trainner);



let property = 'name';
console.log(trainner[property]);

console.log(trainner['country']);

trainner.country = 'México';

console.log(trainner['country']);

console.log(typeof(trainner['pokemon']))




/* Métodos */


trainner.showInfo();
let before = trainner.changeName('charizard');
trainner.showInfo();

console.log(`El nombre anterior es: ${before}`)

console.log(trainner.pokemon.name);


/* Ejemplos de Métodos */

/*Crear un objeto que modele un triángulo-rectángulo
Propiedades: base y altura
Métodos: Área y Perímetro
*/



let triangle = {
    base: 0,
    height: 0,

    init: function(b, h) {
        triangle.base = b;
        triangle.height = h;
    },

    showData: function () {
        console.log(`Base: ${triangle.base}\r\nAltura: ${triangle.height}`)
    },

    area: () => {
        let area = (triangle.base * triangle.height)/2;
        return area;
    },

    hypotenusa: () => {
        //c^2 = a^2 + b^2 -> c = raiz(a^2 + b^2)

        let c = Math.sqrt((triangle.base ** 2) + (triangle.height ** 2));
        return c;
    },

    perimeter: () => {
        let perimeter = triangle.base + triangle.height + triangle.hypotenusa();
        return perimeter;
    }
}

triangle.init(50, 70);
triangle.showData();

let area = triangle.area()
console.log(area);

console.log(`La hipotenusa del triángulo es: ${triangle.hypotenusa()}`)

/* This */

let alcohol = {
    bottle: 'Rancho Escondido',
    type: 'Tequila',

    soda: {
        name: 'Squirt'
    },

    showInfo: function() {

        console.log(`Botella: ${this.bottle}\r\nType: ${this.type}`);

        //No me importa cómo se llama el objeto, dentro de este objeto existe una propiedad llamada 'bottle' y 'type'.
    },

    changeSoda: function(newName){
        let before = this.name;
        this.name = newName;
        return before;
    },

    showData: () => {

        console.log(`Botella: ${this.bottle}\r\nType: ${this.type}`);
        //No me importa cómo se llama el objeto, dentro de este objeto existe una propiedad llamada 'bottle' y 'type'.
    },
}

alcohol.showInfo();
alcohol.showData();


/* Constructor */

// Función anónima que me retorna un objeto


let constructor = (nameInit, typeInit) => {
    let object = {
        name: nameInit,
        type: typeInit,

        enemy: {
            name: 'Vegeta'
        },

        showInfo: function() {

            console.log(`Name: ${this.name}\r\nType: ${this.type}`);
        },
    
        changeName: function(newName){
            let before = this.name;
            this.name = newName;
            return before;
        },
    }

    return object;
}

let character1 = constructor('Goku', 'Saiyajin');
let character2 = constructor('Krilin', 'Humano');

console.log(character1);
character1.showInfo();

/*Closure --> Nadie puede acceder, alv --> Propiedades y métodos privados */


let constr = (botteInit, typeInit) => {
    let bottle = botteInit;
    let type = typeInit;

    let object = {

        cost: 1266,
    
        showInfo: function() { 
            console.log(`Bottle: ${bottle}\r\nType: ${type}`);
        },

        changeName: function(newName){
            let before = bottle;
            bottle = newName;
            return before;
        }
    }

    return object;
}

let bottle1 = constr("JB", "Whisky");
let bottle2 = constr("Absolut", "Vodka");


bottle1.showInfo();

let before2 = bottle1.changeName("Black Label");
bottle1.showInfo();
console.log(`El nombre anterior es: ${before2}`)

bottle1.showInfo();


bottle1.bottle = 'Jack Daniels';
bottle1.showInfo();

/* New */

function myObject(nameInit, typeInit){
    this.name = nameInit;
    this.type = typeInit;
    this['main_enemy'] = 'Jafar';

    this.power = {
        first: 'Magia Oculta',
    }

    this.showInfo = function () {
        console.log(`Name: ${this.name}\r\nType: ${this.type}`);
    },

    this.changeName = function(newName) {
        let before = this.name;
        this.name = newName;
        return before;
    }
}


let princess = new myObject('Jazmin', 'Morena');
princess.showInfo()

console.log(princess.main_enemy);

/* Herencia */

/*
myObject.showType = () => {
    console.log(this.type);
}

myObject.age = 0;
princess.age = 18;
console.log(princess.age)

console.log(myObject.showType())

princess.showType();
*/



let pokemon = {
    name: 'Charmander',
    type: 'fire',
    nemesis: {
        name: 'Squartle'
    },

    showInfo: function() { //No me importa cómo se llama el objeto, dentro de este objeto (de si mismo) existe una propiedad llamada 'name'
        console.log(`Name: ${this.name}\r\nType: ${this.type}`);
    },
    changeName: function(newName){
        let before = this.name;
        this.name = newName;
        return before;
    }
}

//instancia
let pokemon1 = Object.create(pokemon);
let pokemon2 = Object.create(pokemon);

pokemon1.showInfo();

pokemon.showType = function () {
    console.log(this.type)
}

pokemon2.showNemesis = function() {
    console.log(this.nemesis.name);
}

pokemon1.showType();


pokemon2.showNemesis();

//pokemon1.showNemesis();

let pokemon3 = Object.create(pokemon2)

pokemon3.showNemesis();