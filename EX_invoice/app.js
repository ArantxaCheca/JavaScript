import {Company} from "./company";
import {Invoice} from "./invoice";

const myCompany = new Company('Acme', 'C/ Pez', '123-456-789', 'A12345678')

const i1 = new Invoice(myCompany,
    new Company('X', 'C/ Sol', '987-654-321', 'B87654321')
)

i1.printInvoice()
