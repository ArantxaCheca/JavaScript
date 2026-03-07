// SET - Estructura que guarda una lista de elementos únicos. No permite elementos repetidos y no tiene índices

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)

// Métodos comunes

// add y delete
    // add añade un elemento al set
    // delete elimina un elemento del set y devuelve true si se ha eliminado o false si no se ha encontrado

mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)

// has - has devuelve true si el elemento existe en el set o false si no existe

console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size - devuelve el número de elementos del set

console.log(mySet.size)

// Convertir un set a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)