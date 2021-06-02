import {HasFormatter} from '../Interfaces/HasFormater.js'

export class Payment implements HasFormatter{
    recipienet: string
    details: string
    amount: number

    constructor(c: string, d: string, a: number) {
        this.recipienet= c,
        this.details= d,
        this.amount = a
    }

    format() {
        return  `${this.recipienet} is owed ${this.amount} for ${this.details}`
    }
}