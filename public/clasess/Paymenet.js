var Payment = /** @class */ (function () {
    function Payment(c, d, a) {
        this.recipienet = c,
            this.details = d,
            this.amount = a;
    }
    Payment.prototype.format = function () {
        return this.recipienet + " is owed " + this.amount + " for " + this.details;
    };
    return Payment;
}());
export { Payment };
