// const circ = (diameter: number) => {
//     return diameter * Math.PI
// }

// console.log(circ(3))

// let mixed:(string|number|boolean)[] = []

// mixed.push('rafi')
// mixed.push('rakib')
// mixed.push(2)
// mixed.push(false)
// console.log(mixed)

// let ninja : {
//     name: string,
//     age: number,
//     beltColor: string
// }

// ninja = {
//     name: 'rafi',
//     age: 22,
//     beltColor: 'black'
// }
// console.log(ninja)


// let func: Function

// func = () => {
//     console.log('func')
// }
// func()

// const greet = (a:number, b:number, c: string | number = 8) => {
//     console.log(a+b)
//     console.log(c)
// }

// greet(2, 3, 9)

// const minus = (a: number, b: number) => {
//     return a+ b
// }

// let resut = minus(3, 6)

// console.log(resut)

// type strOrNum = string | number
// type objWithName = {name: string, uid: strOrNum}

// const logDetails = (uid: strOrNum, item: string) => {
//     console.log(`${item} has uid of ${uid}`)
// }
// logDetails('apple', 'rafi')

// const greet = (user:objWithName) => {
//     console.log(`${user.name} says hello`)
// }

// const greetName = (user:objWithName) => {
//     console.log(`${user.name} says hello`)
// }


// let greet : (a: string, b:string)=> void

// greet = (name: string, greeting: string) => {
//     console.log(`${name} says greeting`)
// }

// let calc: (a: number, b: number, c:string)=> number

// calc = (numOne: number, numTwo: number, action: string) => {
//     switch(action) {
//         case 'add': {
//             return numOne + numTwo
//         }

//         case 'minus': {
//             return numOne - numTwo
//         }

//         default :return numOne * numTwo
//     }
// }

// console.log(calc(2, 4, 'add'))

// let details : (obj:{name: string, age:number}) => void

// details = (rafi:{name: string, age: number}) => {
//     return `${rafi.name} is ${rafi.age} years old`
// }

// let personDetails = {
//     name: 'rafi',
//     age: 20
// }

// console.log(details(personDetails))