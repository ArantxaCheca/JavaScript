// MAP - Estructura que guarda una lista de pares clave-valor. Permite claves únicas y se accede a ellas por clave

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set - añade un elemento al map o actualiza su valor si la clave ya existe

myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get - devuelve el valor de la clave o undefined si no existe

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has - devuelve true si la clave existe en el map o false si no existe

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete - elimina un elemento del map y devuelve true si se ha eliminado o false si no se ha encontrado

myMap.delete("email")

console.log(myMap)

// keys, values y entries - devuelven un iterable con las claves, valores o pares clave-valor del map respectivamente

console.log(myMap.keys()) // Devuelve todas las claves del map
console.log(myMap.values()) // Devuelve todos los valores del map
console.log(myMap.entries()) // Devuelve todas las entradas del map en forma de array [clave, valor]

// size - devuelve el número de elementos del map

console.log(myMap.size)

// clear - elimina todos los elementos del map

myMap.clear()
console.log(myMap)