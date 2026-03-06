export class Product { 
    #sku  //string
    #name  //string
    #unitPrice  //number
    constructor(sku, name, unitPrice) {
        this.#sku = sku
        this.#name = name
        this.#unitPrice = unitPrice
    }

    const p1 = new Product('A123', 'Botella', 3)
    p1.renderInvoiceLine(3) 
    const p2 = new Product('B456', 'Vaso', 2)
    p2.renderInvoiceLine(15) 

#calculatePrice(items) {
    return items * this.#unitPrice
}

renderInvoiceLine(amount) {
    const result = [" ", this.#calculatePrice(amount)];
    result[0] = `
    ${this.#name}: ${amount} unidades a ${this.#unitPrice} 
}€ Total............................... ${result[1]}€`;
return result;
}

const p1 = new Product('A123', 'Botella', 2)

renderLine(name, items, price) {
    return `${name}: ${items} unidades a ${price}€ Total............................... ${price*item}€`
}
}

renderLine('Botella', 3, 2) // Botella: 3 unidades a 2€  Total.......... 6€ 

console.log(line)

