//Example - Bad
class VehicleOrder {
    orderNumber: number;
    make: string;
    model: string;

    constructor(orderNumber: number, make: string, model: string) {
        this.make = make;
        this.model = model;
        this.orderNumber = orderNumber;
    }

    orderCar(){
        console.log(`Car Order-${this.orderNumber}\n
        Make ${this.make}\n
        Model ${this.model}\n`);
    }

    orderMotorcycle(){
        console.log(`Motorcycle Order-${this.orderNumber}\n
        Make ${this.make}\n
        Model ${this.model}\n`);
    }
}

const carOrder123 = new VehicleOrder(123, "hyundai", "i10");
carOrder123.orderCar();
const motorcycleOrder123 = new VehicleOrder(123, "Honda", "X-ADV 750");
motorcycleOrder123.orderMotorcycle();

//Example - Bad - New requirement comes in and forces a change to the base class constructor
// but also adds extra information to an order that would need to know about a sunroof
class VehicleOrderNewRequirement {
    orderNumber: number;
    make: string;
    model: string;
    sunroof: boolean;

    constructor(orderNumber: number, make: string, model: string, sunroof: boolean) {
        this.orderNumber = orderNumber;
        this.make = make;
        this.model = model;
        this.sunroof = sunroof;
    }

    orderCar(){
        console.log(`Car Order-${this.orderNumber}\n
        Make ${this.make}\n
        Model ${this.model}\n
        Sunroof ${this.sunroof}\n`);
    }

    orderMotorcycle(){
        console.log(`Motorcycle Order-${this.orderNumber}\n
        Make ${this.make}\n
        Model ${this.model}\n
        Sunroof ${this.sunroof}\n`);
    }
}

const carOrder234 = new VehicleOrderNewRequirement(234, "hyundai", "i10", true);
carOrder234.orderCar();
const motorcycleOrder234 = new VehicleOrderNewRequirement(234, "Honda", "X-ADV 750", false);
motorcycleOrder234.orderMotorcycle();