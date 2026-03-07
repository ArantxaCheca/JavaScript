// 1. Concatena dos cadenas de texto
let myName = "Arantxa"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// 2. Muestra la longitud de una cadena de texto
console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[13])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase()) 
console.log(greeting.toLowerCase()) 

// 5. Crea una cadena de texto en varias líneas
let message = `Hola, este
es mi
curso de
JavaScript`
console.log(message)

// 6. Interpola el valor de una variable en un string
console.log(`Hola, ${myName}!`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(greeting.replace(" ", "-")) 

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(greeting.includes("Arantxa"))
console.log(greeting.includes("Pez"))

// 9. Comprueba si dos strings son iguales
let string1 = "Hola"
let string2 = "Hola"
let string3 = "Adiós"   
console.log(string1 === string2) // true
console.log(string1 === string3) // false   

// 10. Comprueba si dos strings tienen la misma longitud
let string4 = "Hola"
let string5 = "Adiós"
console.log(string4.length === string5.length) // false      