//1. Imprime por consola el string 'Hello World'.
const saludo = 'Hello World';
console.log(saludo);

//2. Declara una variable de las dos formas posibles, e imprime por consola los dos valores.
const nombre = 'Arantxa';
console.log(nombre);

//3. Cambia ahora el valor de una de las dos variables e imprime por consola.
let edad = 22;
console.log(edad);
edad = 23;
console.log(edad);

//4. Crea dos variables numéricas e imprime el resultado de sumarlas por consola.
let num1 = 5;
let num2 = 7;
let resultado = num1 + num2; 
console.log(resultado);

//5. Declara dos variables de tipo string. Imprime por consola el resultado de concatenarlas.
let ob1 = 'Soy';
let ob2 = 'ArantxaC';
let conc = ob1 + ' ' + ob2;
console.log(conc);

//6. Crea una función que imprima por consola el string 'Hello World'.
function imprimirSaludo() {
    console.log('Hello World');
}
imprimirSaludo();

//7. Crea una función que, al ser llamada, imprima por consola el resultado de la multiplicación de dos números introducidos como parámetros.
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(5, 3));

//8. Crea una función que imprima por consola el resultado de elevar al cubo un número dado como parámetro.
function elevarAlCubo(num) {
    return num * num * num; 3;
}
console.log(elevarAlCubo(3, 3, 3));

//9. Crea una función que saque por consola el área de un rectángulo de dimensiones dadas como parámetro. (base, altura)
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log(areaRectangulo(4, 5));
