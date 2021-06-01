interface IsPerson {
    name: string,
    age: number,
    speak(a: string) : void,
    spend(a: number) : number
}

const me: IsPerson = {
    name: 'rafi',
    age: 22,
    speak(text: string): void {
        console.log(text)
    },

    spend(amount: number): number {
        console.log('i spent', amount)
        return amount
    }
}

console.log(me.speak('hello'))
console.log(me.spend(30))


import { Invoice } from './clasess/classes.js';

const invOne = new Invoice('rafi', 'car', 2000)
const invtwo = new Invoice('rakib', 'apartment', 8000)

console.log(invOne.format())
console.log(invOne, invtwo)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invtwo)

console.log(invoices)

const form = document.querySelector('.new-item-form') as HTMLElement

const type = document.querySelector('#type') as HTMLSelectElement
const toForm = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()
    console.log(`${toForm.value} paid the ${type.value} ${amount.value} for ${details.value}`)
    console.log(
        type.value,
        toForm.value,
        details.value,
        amount.value
    )
})