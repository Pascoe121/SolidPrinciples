//Example - Bad
var Store = /** @class */ (function () {
    function Store(user) {
        this.paypal = new PayPal(user);
        this.user = user;
        this.googlePay = new GooglePay();
    }
    Store.prototype.purchaseItem = function (item, amount) {
        this.paypal.makePayment(item, amount * 100);
        this.googlePay.makePayment(this.user, item, amount);
    };
    return Store;
}());
var PayPal = /** @class */ (function () {
    function PayPal(user) {
        this.user = user;
    }
    PayPal.prototype.makePayment = function (item, amountInPennies) {
        console.log(this.user + " bought " + item + " for \u00A3" + amountInPennies / 100 + " with PayPal");
    };
    return PayPal;
}());
var GooglePay = /** @class */ (function () {
    function GooglePay() {
    }
    GooglePay.prototype.makePayment = function (user, item, amountInPounds) {
        console.log(user + " bought " + item + " for \u00A3" + amountInPounds + " with GooglePay");
    };
    return GooglePay;
}());
var store = new Store("Dave");
store.purchaseItem("facemask", 5);
