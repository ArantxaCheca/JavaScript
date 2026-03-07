// ARRAY - Estructura que guarda una lista ordenada de elementos. Permite elementos repetidos y se accede a ellos por índice

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Brais", "Moure", "mouredev", 37, true]
myArray2 = new Array("Brais", "Moure", "mouredev", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
myArray2[2] = "Brais"
// myArray2[0] = "Moure"
myArray2[1] = "mouredev"
myArray2[4] = "mouredev"

console.log(myArray2)

myArray = []
myArray[2] = "Brais"
// myArray[0] = "Moure"
myArray[1] = "mouredev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop
    // push añade un elemento al final del array
    // pop elimina el último elemento del array y lo devuelve

myArray.push("Brais")
myArray.push("Moure")
myArray.push("mouredev")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift
    // shift elimina el primer elemento del array y lo devuelve
    // unshift añade un elemento al principio del array

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Brais", "mouredev")
console.log(myArray)

// length devuelve la longitud del array

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa para inicializar el array en lugar de asignar un nuevo array vacío
console.log(myArray)

// slice devuelve una copia de la parte del array que se le indica sin tener en cuenta la última posición

myArray = ["Brais", "Moure", "mouredev", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice permite eliminar elementos de un array desde el primer elemento que se le indique y el número de elementos a eliminar, además de permitir añadir nuevos elementos en esa posición

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Brais", "Moure", "mouredev", 37, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)


// Pruebas
let myArray33 = ["Arantxa", "Checa", "Álvaro", 41, true]
console.log(myArray33)

console.log(myArray33.length)

let myNewArray33 = myArray33.slice(0, 2)
console.log(myNewArray33)

myArray33.splice(1, 3)
console.log(myArray33)
