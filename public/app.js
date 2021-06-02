import { ListTamplate } from './clasess/ListTamplate.js';
import { Payment } from './clasess/Payment.js';
import { Invoice } from './clasess/Invoice.js';
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toForm = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.createElement('ul');
var list = new ListTamplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
