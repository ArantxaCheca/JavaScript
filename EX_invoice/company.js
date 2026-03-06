export class Company {
    #name 
    #address   
    #phone 
    #nif 

    // setters & getters
        // get devuelve información
        // set modifica la información 

    get name() {
        return this.#name
    }

    get address() {
        return this.#address
    }

    get phone() {
        return this.#phone
    }

    get nif() {
        return this.#nif
    }

    /* set name(name) {
        this.#name = name
    } */

    constructor(name, address, phone, nif) {
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
        this.#nif = nif;
    } 

    // Esta parte no es necesaria, pero es una forma de mostrar la información de la empresa sin mostrar toda la información.
    returnInfo() {
        return {
            name: this.#name, 
            phone: this.#phone,
            // Con template string para interpolar variables  
            data: `${this.#address}, ${this.#nif}`,
        }
    }
}

// En los archivos de modelos de abstracción no se incluyen los objetos, por eso tenemos que importarlos con el export del principio de la clase.  

// Los objetos de aquí abajo irían en otro archivo  
const c1 = new Company('Acme', 'C/ Pez', '123-456-789', 'A12345678') 
const c2 = new Company('X', 'C/ Sol', '987-654-321', 'B87654321')

console.log(c1, c2)
console.log(c1.name)
console.log(c1.returnInfo());
console.log(c2.returnInfo()); 

/* 
Para setter: 
c1.name = 'New Acme'
*/
