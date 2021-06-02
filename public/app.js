var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
    var values;
    values = [toForm.value, details.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], values)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values)))();
    }
    list.render(doc, type.value, 'end');
});
