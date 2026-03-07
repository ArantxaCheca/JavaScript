// CONDICIONALES

// Condicionales if-else

let age = 14

/* if (age != 41) {
    console.log ("Tu edad no es 41 años")
}else {
    console.log ("Tu edad es 41 años")
} */

if (age >= 18) {
    console.log ("Eres mayor de edad")
}else if (age < 18 && age >=0) {
    console.log ("Eres menor de edad")
}else {
    console.log ("Edad no válida")
}


// Operador ternario ?:

let isAdult = age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(isAdult);


// Condicionales switch

let day = 3
let dayName

switch (day) {
    case 0:
        dayName ="Lunes"
        break
    case 1:
        dayName ="Martes"
        break
    case 2:
        dayName ="Miércoles"
        break
    case 3:
        dayName ="Jueves"
        break
    case 4:
        dayName ="Viernes"
        break
    case 5:
        dayName ="Sábado"
        break
    case 6:
        dayName ="Domingo"
        break
    default:
        dayName ="Día no válido"
}
console.log(dayName)