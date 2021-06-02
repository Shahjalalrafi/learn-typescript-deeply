import { Payment } from './clasess/Payment';
import { HasFormatter } from './Interfaces/HasFormater';
import { Invoice } from './clasess/Invoice';

let docOne : HasFormatter
let docTwo : HasFormatter

docOne = new Invoice('rafi', 'for web', 200)
docTwo = new Payment('rakib', 'for car', 30000)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

console.log(docs)

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

const greetPerson = (person: IsPerson) => {
    console.log(person.name)
}

greetPerson(me)

console.log(me)



const invOne = new Invoice('rafi', 'car', 2000)
const invtwo = new Invoice('rakib', 'apartment', 8000)

console.log(invOne.format())
console.log(invOne, invtwo)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invtwo)

console.log(invoices)




//generics 

const addUID = (obj: object) => {
    let uId = Math.floor(Math.random() *100)
    return {...obj, uId}
}

let docOnee = addUID({name: 'rafi'})

console.log(docOnee)

enum ResourceType  { Boook, film, author, person}

interface Resource<T> {
    uId: number,
    resouceType: ResourceType
    data: T
}

const docTwoo: Resource<String> = {
    uId: 3,
    resouceType: ResourceType.author,
    data: 'rafi'
}

const docThree: Resource<any[]> = {
    uId: 5,
    resouceType: ResourceType.film,
    data: ['ak', 'duiy', 3]
}

console.log(docTwoo, docThree)

const circ = (diameter: number) => {
    return diameter * Math.PI
}

console.log(circ(3))


let mixed:(string|number|boolean)[] = []

mixed.push('rafi')
mixed.push('rakib')
mixed.push(2)
mixed.push(false)
console.log(mixed)

let ninja : {
    name: string,
    age: number,
    beltColor: string
}

ninja = {
    name: 'rafi',
    age: 22,
    beltColor: 'black'
}
console.log(ninja)


let func: Function

func = () => {
    console.log('func')
}
func()

let greet = (a:number, b:number, c: string | number = 8) => {
    console.log(a+b)
    console.log(c)
}

greet(2, 3, 9)

const minus = (a: number, b: number) => {
    return a+ b
}

let resut = minus(3, 6)

console.log(resut)

type strOrNum = string | number
type objWithName = {name: string, uid: strOrNum}

const logDetails = (uid: strOrNum, item: string) => {
    console.log(`${item} has uid of ${uid}`)
}
logDetails('apple', 'rafi')

const greett = (user:objWithName) => {
    console.log(`${user.name} says hello`)
}

const greetName = (user:objWithName) => {
    console.log(`${user.name} says hello`)
}


let greettt : (a: string, b:string)=> void

greettt = (name: string, greeting: string) => {
    console.log(`${name} says greeting`)
}

let calc: (a: number, b: number, c:string)=> number

calc = (numOne: number, numTwo: number, action: string) => {
    switch(action) {
        case 'add': {
            return numOne + numTwo
        }

        case 'minus': {
            return numOne - numTwo
        }

        default :return numOne * numTwo
    }
}

console.log(calc(2, 4, 'add'))

let details : (obj:{name: string, age:number}) => void

details = (rafi:{name: string, age: number}) => {
    return `${rafi.name} is ${rafi.age} years old`
}

let personDetails = {
    name: 'rafi',
    age: 20
}

console.log(details(personDetails))