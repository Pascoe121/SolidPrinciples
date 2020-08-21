import { Store, PayPalPaymentProcessor, GooglePayPaymentProcessor, PayPal, GooglePay} from './DependencyInversionGood';

describe('Store', () => {
    it('purchaseItem should make a purchase with the correct payment service (PayPal)', async () => {
        //Arrange
        let store: Store = new Store(new PayPalPaymentProcessor("Dave"));
        //Mock
        console.log = jest.fn();

        //Act
        store.purchaseItem("facemask", 5);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Dave bought facemask for £5 with PayPal");
    });

    it('purchaseItem should make a purchase with the correct payment service (PayPal)', async () => {
        //Arrange
        let store: Store = new Store(new GooglePayPaymentProcessor("Dave"));
        //Mock
        console.log = jest.fn();

        //Act
        store.purchaseItem("facemask", 5);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Dave bought facemask for £5 with GooglePay");
    });
});

describe('PayPalPaymentProcessor', () => {
    it('pay should make a purchase with the correct item and amount', async () => {
        //Arrange
        let payPalPaymentProcessor: PayPalPaymentProcessor = new PayPalPaymentProcessor("Dave");
        //Mock
        console.log = jest.fn();

        //Act
        payPalPaymentProcessor.pay("facemask", 5);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Dave bought facemask for £5 with PayPal");
    });
});

describe('GooglePayPaymentProcessor', () => {
    it('pay should make a purchase with the correct item and amount', async () => {
        //Arrange
        let googlePayPaymentProcessor: GooglePayPaymentProcessor = new GooglePayPaymentProcessor("Dave");
        //Mock
        console.log = jest.fn();

        //Act
        googlePayPaymentProcessor.pay("facemask", 5);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Dave bought facemask for £5 with GooglePay");
    });
});