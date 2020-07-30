
//Example - Bad
//This is bad due to the high level module (StoreBad) being dependant on low level modules (PayPalBad, GooglePayBad).
//The correct approach is to use abstractions, as shown in good example.
class StoreBad {
    paypal: PayPalBad
    user: string
    googlePay: GooglePayBad
    
    constructor(user) {
        this.paypal = new PayPalBad(user)
        this.user = user
        this.googlePay = new GooglePayBad()
    }

    purchaseItem(item: string, amount: number) {
        this.paypal.makePayment(item, amount * 100)
        this.googlePay.makePayment(this.user, item, amount)
    }
}

class PayPalBad {
    user: string
    
    constructor(user) {
        this.user = user
    }

    makePayment(item, amountInPennies) {
        console.log(`${this.user} bought ${item} for £${amountInPennies /100} with PayPal`)
    }
}

class GooglePayBad {
    makePayment(user, item, amountInPounds) {
        console.log(`${user} bought ${item} for £${amountInPounds} with GooglePay`)
    }
}

const storeBad = new StoreBad("Dave");
storeBad.purchaseItem("facemask", 5);