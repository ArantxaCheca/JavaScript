// Strings (cadenas de texto)

// Concatenación

let myName = "Arantxa"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase()) // Mayúsculas
console.log(greeting.toLowerCase()) // Minúsculas
console.log(greeting.indexOf("Hola")) // Índice
console.log(greeting.indexOf("Arantxa")) // Índice. Imprime el caracter donde inicia la palabra
console.log(greeting.indexOf("Negativo")) // Índice. Imprime -1 porque no encuentra la palabra
console.log(greeting.includes("Hola")) // Si contiene la palabra imprime true
console.log(greeting.includes("Arantxa")) 
console.log(greeting.includes("Negativo")) // Si no contiene la palabra imprime false
console.log(greeting.slice(0, 9)) // Imprime los caracteres que están entre el índice 0 y el 9 (sin incluir el 9)
console.log(greeting.replace("Arantxa", "Checa")) // Reemplaza la palabra "Arantxa" por "Checa". Si la palabra no se encuentra, no hace nada 

// Template literals (plantillas literales)

// Strings en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// Interpolación de valores - template literals
let color = "rojo"
console.log(`Hola, ${myName}! Tu color favorito es el ${color}.`)