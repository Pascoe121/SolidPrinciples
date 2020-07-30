
//Example - Good
//Uses abstraction (PayPalPaymentProcessor & GooglePayPaymentProcessor) to ensure high-level modules (StoreGood)
// do not depend on the low-level modules (PayPal, GooglePay)
//The store only has a contract withe the payment processor and not with the PayPal's or GooglePays implementation or possible future changes.
class Store {
    paymentProcessor: PaymentProcessor  
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }

    purchaseItem(item: string, amount: number) {
        this.paymentProcessor.pay(item, amount)
    }
}

interface PaymentProcessor {
    pay(item: string, amount: number): void;
}

//PayPalPaymentProcessor implements the PaymentProcessor interface and defines it specific pay implementation
// calling through to PayPal with what it requires to make a payment in PayPal's case an item and amount in pennies
class PayPalPaymentProcessor implements PaymentProcessor {
    paypal: PayPal
    constructor(user) {
        this.paypal = new PayPal(user)
    }

    pay(item, amountInPounds) {
        this.paypal.makePayment(item, amountInPounds * 100)
    }
}

//GooglePayPaymentProcessor implements the PaymentProcessor interface and defines it specific pay implementation
// calling through to GooglePay with what it requires to make a payment in this case a user an item and amount in pounds
class GooglePayPaymentProcessor implements PaymentProcessor {
    googlePay: GooglePay
    user: string
    constructor(user) {
        this.googlePay = new GooglePay()
        this.user = user
    }

    pay(item, amountInPounds) {
        this.googlePay.makePayment(this.user, item, amountInPounds)
    }
}

//PayPal has its own make payment implementation
class PayPal {
    user: string
    
    constructor(user) {
        this.user = user
    }

    makePayment(item, amountInPennies) {
        console.log(`${this.user} bought ${item} for £${amountInPennies /100} with PayPal`)
    }
}

//GooglePay has its own make payment implementation
class GooglePay {
    makePayment(user, item, amountInPounds) {
        console.log(`${user} bought ${item} for £${amountInPounds} with GooglePay`)
    }
}

//Store can now be passed either a PayPalPaymentProccessor or a GooglePayPaymentProcessor
//The store does not have to care about how that payment is processed.
const store = new Store(new PayPalPaymentProcessor("Dave"));
store.purchaseItem("facemask", 5); 
// Dave bought facemask for £5 with PayPal

//const store = new Store(new GooglePayPaymentProcessor("Dave"));
//store.purchaseItem("facemask", 5); 
//Dave bought facemask for £5 with GooglePay
