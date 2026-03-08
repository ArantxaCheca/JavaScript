// LOOPS O BUCLES - Permiten ejecutar un bloque de código varias veces

//for - Permite ejecutar un bloque de código un número determinado de veces mientras se cumpla la condición. Evalúa antes de ejecutar

for (let i = 0; i < 5; i++) {
    console.log(`Hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while - Permite ejecutar un bloque de código mientras se cumpla una condición. Evalúa antes de ejecutar  

let i = 0;
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

/* 
// Bucle infinito
while(true) {

} 
*/

// do while - Similar al while pero se ejecuta al menos una vez, ya que la condición se evalúa después de ejecutar el bloque de código

i = 6
do {
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of - recorre los valores de un iterable (como un array, set, map o string) y los asigna a una variable en cada iteración

let myArray = [1, 2, 3, 4]

let mySet = new Set (["Arantxa", "Checa", "webdev", 41, true, "arantxacheca6@gmail.com"])

let myMap = new Map ([
    ["name", "Arantxa"],
    ["email", "arantxacheca6@gmail.com"],
    ["age", 41]
])

const myString = "Hola Mundo"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

// for in - recorre las propiedades de un objeto, es decir, las claves, no los valores

const person = {
    name: "Arantxa",
    age: 41,
    email: "arantxacheca6@gmail.com"    
}

for (let key in person) {
    console.log(key)
}

// break y continue - Permiten controlar el flujo de un bucle. 
    // continue salta a la siguiente iteración
    // break termina el bucle

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue // Salta a la siguiente iteración, no se ejecuta el console.log para i = 5
    } else if (i == 7) {
        break // Termina el bucle, no se ejecuta el console.log para i = 7 ni para los siguientes valores
    }
    console.log(`Hola ${i}`)
}

// Resumen
    // for - Bucle con contador (índice) que se repite mientras se cumpla una condición
    // while - Se ejecuta mientras se cumpla una condición
    // do while - Se ejecuta al menos una vez y luego evalúa la condición
    // for of - Recorre los valores de un iterable: arrays, strings, sets, maps
    // for in - Recorre las propiedades (claves) de un objeto  