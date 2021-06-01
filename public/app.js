var me = {
    name: 'rafi',
    age: 22,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('i spent', amount);
        return amount;
    }
};
console.log(me.speak('hello'));
console.log(me.spend(30));
import { Invoice } from './clasess/classes.js';
var invOne = new Invoice('rafi', 'car', 2000);
var invtwo = new Invoice('rakib', 'apartment', 8000);
console.log(invOne.format());
console.log(invOne, invtwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invtwo);
console.log(invoices);
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toForm = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(toForm.value + " paid the " + type.value + " " + amount.value + " for " + details.value);
    console.log(type.value, toForm.value, details.value, amount.value);
});
