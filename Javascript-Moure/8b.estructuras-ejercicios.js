// 1. Crea un array que almacene cinco animales
let animals = ["Perro", "Gato", "Pájaro", "Conejo", "Tortuga"]
console.log (animals)

// 2. Añade dos más. Uno al principio y otro al final
animals.push("Pez")
animals.unshift("Caballo")
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(2, 1)
console.log(animals)

// 4. Crea un set que almacene cinco libros
let books = new Set(["El Quijote", "Cien años de soledad", "La sombra del viento", "El nombre de la rosa", "El código Da Vinci"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido
books.add("El Alquimista")
books.add("El Quijote")
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete("El código Da Vinci")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
let months = new Map([
    [1, "Enero"],
    [2, "Febrero"], 
    [3, "Marzo"],
    [4, "Abril"],   
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])
console.log(months)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (months.has(5)) {
    console.log(months.get(5))
} else {
    console.log("El mes número 5 no existe en el map")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
months.set("verano", ["Junio", "Julio", "Agosto"])
console.log(months)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray = ["Rojo", "Blanco", "Negro", "Amarillo", "Fucsia"]

let mySet = new Set(myArray)
console.log(mySet)

let myMap = new Map()
myMap.set("colores", mySet)
console.log(myMap)