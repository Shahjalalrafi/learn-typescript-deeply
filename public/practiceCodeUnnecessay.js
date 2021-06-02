var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Payment } from './clasess/Payment';
import { Invoice } from './clasess/Invoice';
var docOne;
var docTwo;
docOne = new Invoice('rafi', 'for web', 200);
docTwo = new Payment('rakib', 'for car', 30000);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
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
var greetPerson = function (person) {
    console.log(person.name);
};
greetPerson(me);
console.log(me);
var invOne = new Invoice('rafi', 'car', 2000);
var invtwo = new Invoice('rakib', 'apartment', 8000);
console.log(invOne.format());
console.log(invOne, invtwo);
var invoices = [];
invoices.push(invOne);
invoices.push(invtwo);
console.log(invoices);
//generics 
var addUID = function (obj) {
    var uId = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uId: uId });
};
var docOnee = addUID({ name: 'rafi' });
console.log(docOnee);
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Boook"] = 0] = "Boook";
    ResourceType[ResourceType["film"] = 1] = "film";
    ResourceType[ResourceType["author"] = 2] = "author";
    ResourceType[ResourceType["person"] = 3] = "person";
})(ResourceType || (ResourceType = {}));
var docTwoo = {
    uId: 3,
    resouceType: ResourceType.author,
    data: 'rafi'
};
var docThree = {
    uId: 5,
    resouceType: ResourceType.film,
    data: ['ak', 'duiy', 3]
};
console.log(docTwoo, docThree);
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(3));
var mixed = [];
mixed.push('rafi');
mixed.push('rakib');
mixed.push(2);
mixed.push(false);
console.log(mixed);
var ninja;
ninja = {
    name: 'rafi',
    age: 22,
    beltColor: 'black'
};
console.log(ninja);
var func;
func = function () {
    console.log('func');
};
func();
var greet = function (a, b, c) {
    if (c === void 0) { c = 8; }
    console.log(a + b);
    console.log(c);
};
greet(2, 3, 9);
var minus = function (a, b) {
    return a + b;
};
var resut = minus(3, 6);
console.log(resut);
var logDetails = function (uid, item) {
    console.log(item + " has uid of " + uid);
};
logDetails('apple', 'rafi');
var greett = function (user) {
    console.log(user.name + " says hello");
};
var greetName = function (user) {
    console.log(user.name + " says hello");
};
var greettt;
greettt = function (name, greeting) {
    console.log(name + " says greeting");
};
var calc;
calc = function (numOne, numTwo, action) {
    switch (action) {
        case 'add': {
            return numOne + numTwo;
        }
        case 'minus': {
            return numOne - numTwo;
        }
        default: return numOne * numTwo;
    }
};
console.log(calc(2, 4, 'add'));
var details;
details = function (rafi) {
    return rafi.name + " is " + rafi.age + " years old";
};
var personDetails = {
    name: 'rafi',
    age: 20
};
console.log(details(personDetails));
