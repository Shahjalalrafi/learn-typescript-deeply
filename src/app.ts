import { ListTamplate } from './clasess/ListTamplate.js';
import { Payment } from './clasess/Payment.js';
import { HasFormatter } from './Interfaces/HasFormater.js';
import { Invoice } from './clasess/Invoice.js';


const form = document.querySelector('.new-item-form') as HTMLElement

const type = document.querySelector('#type') as HTMLSelectElement
const toForm = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.createElement('ul')
const list = new ListTamplate(ul)

form.addEventListener('submit', (e:Event) => {
    e.preventDefault()

    let values: [string, string, number]
    values = [toForm.value, details.value, amount.valueAsNumber]
    
    let doc : HasFormatter
    if(type.value === 'invoice') {
        doc = new Invoice(...values)
    }else {
        doc = new Payment(...values)
    }

    list.render(doc, type.value, 'end')

})

