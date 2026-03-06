import { Company } from "./company"

export class Invoice {
    #id = Invoice.#getID()
    #brand 
    #client 
    #items 
    #total 
    #ivaType 
    payment

    constructor(brand, client, items, ivaType = 1.21, payment) {
        this.#brand = brand
        this.#client = client
        this.#items = items = [{
            product: product,
            amount: amount;
        }]
        this.#ivaType = ivaType
        this.payment = payment
        this.#total = 0
    } 
}

const myCompany = new Company('Acme', 'C/ Pez', '123-456-789', 'A12345678')

const i1 = new Invoice(myCompany,
    new Company('X', 'C/ Sol', '987-654-321', 'B87654321')
)
