//Example - Good
export class VehicleOrder {
    orderNumber: number;
    make: string;
    model: string;

    constructor(orderNumber: number, make: string, model: string) {
        this.make = make;
        this.model = model;
        this.orderNumber = orderNumber;
    }
}

export class CarOrder extends VehicleOrder {
    orderCar(){
        console.log(`Car Order-${this.orderNumber}\n`+
        `Make ${this.make}\n`+
        `Model ${this.model}\n`);
    }
}

export class MotorcycleOrder extends VehicleOrder {
    orderMotorcycle(){
        console.log(`Motorcycle Order-${this.orderNumber}\n`+
        `Make ${this.make}\n`+
        `Model ${this.model}\n`);
    }
}

const carOrder123 = new CarOrder(123, "hyundai", "i10");
carOrder123.orderCar();
const motorcycleOrder123 = new MotorcycleOrder(123, "Honda", "X-ADV 750");
motorcycleOrder123.orderMotorcycle();

//Example - when new requirement comes in the base class doesn't need any changes
//Additional requirements can be added to the logical child constructors
export class CarOrderNewRequirement extends VehicleOrder {
    sunroof: boolean;

    constructor(orderNumber: number, make: string, model: string, sunroof: boolean) {
        super(orderNumber, make, model);
        this.sunroof = sunroof;
    }

    orderCar(){
        console.log(`Car Order-${this.orderNumber}\n`+
        `Make ${this.make}\n`+
        `Model ${this.model}\n`+
        `Sunroof ${this.sunroof}\n`);
    }
}

export class MotorcycleOrderNewRequirement extends VehicleOrder {
    sidecar: boolean;

    constructor(orderNumber: number, make: string, model: string, sidecar: boolean) {
        super(orderNumber, make, model);
        this.sidecar = sidecar;
    }

    orderMotorcycle(){
        console.log(`Motorcycle Order-${this.orderNumber}\n`+
        `Make ${this.make}\n`+
        `Model ${this.model}\n`+
        `Sidecar ${this.sidecar}\n`);
    }
}

const carOrder234 = new CarOrderNewRequirement(234, "hyundai", "i10", true);
carOrder234.orderCar();
const motorcycleOrder234 = new MotorcycleOrderNewRequirement(234, "Harley Davidson", "Street 750", true);
motorcycleOrder234.orderMotorcycle();