//Example - Good
//Uses abstraction (PayPalPaymentProcessor & GooglePayPaymentProcessor) to ensure high-level modules (StoreGood)
// do not depend on the low-level modules (PayPal, GooglePay)
//The store only has a contract withe the payment processor and not with the PayPal's or GooglePays implementation or possible future changes.
var Store = /** @class */ (function () {
    function Store(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    Store.prototype.purchaseItem = function (item, amount) {
        this.paymentProcessor.pay(item, amount);
    };
    return Store;
}());
//PayPalPaymentProcessor implements the PaymentProcessor interface and defines it specific pay implementation
// calling through to PayPal with what it requires to make a payment in PayPal's case an item and amount in pennies
var PayPalPaymentProcessor = /** @class */ (function () {
    function PayPalPaymentProcessor(user) {
        this.paypal = new PayPal(user);
    }
    PayPalPaymentProcessor.prototype.pay = function (item, amountInPounds) {
        this.paypal.makePayment(item, amountInPounds * 100);
    };
    return PayPalPaymentProcessor;
}());
//GooglePayPaymentProcessor implements the PaymentProcessor interface and defines it specific pay implementation
// calling through to GooglePay with what it requires to make a payment in this case a user an item and amount in pounds
var GooglePayPaymentProcessor = /** @class */ (function () {
    function GooglePayPaymentProcessor(user) {
        this.googlePay = new GooglePay();
        this.user = user;
    }
    GooglePayPaymentProcessor.prototype.pay = function (item, amountInPounds) {
        this.googlePay.makePayment(this.user, item, amountInPounds);
    };
    return GooglePayPaymentProcessor;
}());
//PayPal has its own make payment implementation
var PayPal = /** @class */ (function () {
    function PayPal(user) {
        this.user = user;
    }
    PayPal.prototype.makePayment = function (item, amountInPennies) {
        console.log(this.user + " bought " + item + " for \u00A3" + amountInPennies / 100 + " with PayPal");
    };
    return PayPal;
}());
//GooglePay has its own make payment implementation
var GooglePay = /** @class */ (function () {
    function GooglePay() {
    }
    GooglePay.prototype.makePayment = function (user, item, amountInPounds) {
        console.log(user + " bought " + item + " for \u00A3" + amountInPounds + " with GooglePay");
    };
    return GooglePay;
}());
//Store can now be passed either a PayPalPaymentProccessor or a GooglePayPaymentProcessor
//The store does not have to care about how that payment is processed.
var store = new Store(new PayPalPaymentProcessor("Dave"));
store.purchaseItem("facemask", 5);
// Dave bought facemask for £5 with PayPal
//const store = new Store(new GooglePayPaymentProcessor("Dave"));
//store.purchaseItem("facemask", 5); 
//Dave bought facemask for £5 with GooglePay
