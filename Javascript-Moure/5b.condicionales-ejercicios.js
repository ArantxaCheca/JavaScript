// 1. Imprime por consola tu nombre si una variable toma su valor
const name = "Arantxa"
if (name === "Arantxa") {
    console.log(`Mi nombre es ${name}`)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
const usename = "admin"
const password = "1234"
if (usename === "admin" && password === "1234") {
    console.log("Usuario y contraseña correctos")
}else {
    console.log("Usuario o contraseña incorrectos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
const number = -5
if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
const age = 16
if (age >= 18) {
    console.log("Puedes votar")     
} else {
    console.log(`Te faltan ${18 - age} años para poder votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
const age2 = 20
const adult = age2 >= 18 ? "adulta" : "menor"
console.log(`La persona es ${adult}`)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
const month = 0
let season

if (month >= 0 && month <= 1 || month === 11) {
    season = "Invierno"
} else if (month >= 2 && month <= 4) {
    season = "Primavera"
} else if (month >= 5 && month <= 7) {
    season = "Verano"
} else if (month >= 8 && month <= 10) {
    season = "Otoño"
} else {
    season = "Mes no válido"
}

console.log(season)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) {
    console.log("El mes tiene 31 días")
} else if (month === 1) {
    console.log("El mes tiene 28 o 29 días")
} else if (month === 3 || month === 5 || month === 8 || month === 10) {
    console.log("El mes tiene 30 días")
} else {
    console.log("Mes no válido")
}   

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
const language = "fr"
let greeting

switch (language) { 
    case "es":
        greeting = "Hola"
        break       
    case "en":
        greeting = "Hello"
        break
    case "fr":
        greeting = "Bonjour"
        break
    default:
        greeting = "Idioma no soportado"
}

console.log(greeting)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
const month2 = 5

switch (month2) {
    case 0:
    case 1:
    case 11:
        season = "Invierno"
        break   
    case 2:
    case 3:
    case 4: 
        season = "Primavera"
        break
    case 5:
    case 6:
    case 7: 
        season = "Verano"
        break
    case 8:
    case 9:
    case 10:        
        season = "Otoño"
        break
    default:
        season = "Mes no válido"
}   
console.log(season)

// 10. Usa un switch para hacer de nuevo el ejercicio 7 (Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior)
const month3 = 1

switch (month3) {   
    case 0:
    case 2:
    case 4: 
    case 6:
    case 7:
    case 9:
        console.log("El mes tiene 30 días")
        break
    case 1:
        console.log("El mes tiene 28 o 29 días")
        break
    case 3:
    case 5:
    case 8: 
    case 10:
        console.log("El mes tiene 30 días")
        break

    default:
        console.log("Mes no válido")
}   
