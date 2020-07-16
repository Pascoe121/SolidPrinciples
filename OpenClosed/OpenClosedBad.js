//Example - Bad
var VehicleOrder = /** @class */ (function () {
    function VehicleOrder(orderNumber, make, model) {
        this.make = make;
        this.model = model;
        this.orderNumber = orderNumber;
    }
    VehicleOrder.prototype.orderCar = function () {
        console.log("Car Order-" + this.orderNumber + "\n\n        Make " + this.make + "\n\n        Model " + this.model + "\n");
    };
    VehicleOrder.prototype.orderMotorcycle = function () {
        console.log("Motorcycle Order-" + this.orderNumber + "\n\n        Make " + this.make + "\n\n        Model " + this.model + "\n");
    };
    return VehicleOrder;
}());
var carOrder123 = new VehicleOrder(123, "hyundai", "i10");
carOrder123.orderCar();
var motorcycleOrder123 = new VehicleOrder(123, "Honda", "X-ADV 750");
motorcycleOrder123.orderMotorcycle();
//Example - Bad - New requirement comes in and forces a change to the base class constructor
// but also adds extra information to an order that would need to know about a sunroof
var VehicleOrderNewRequirement = /** @class */ (function () {
    function VehicleOrderNewRequirement(orderNumber, make, model, sunroof) {
        this.orderNumber = orderNumber;
        this.make = make;
        this.model = model;
        this.sunroof = sunroof;
    }
    VehicleOrderNewRequirement.prototype.orderCar = function () {
        console.log("Car Order-" + this.orderNumber + "\n\n        Make " + this.make + "\n\n        Model " + this.model + "\n\n        Sunroof " + this.sunroof + "\n");
    };
    VehicleOrderNewRequirement.prototype.orderMotorcycle = function () {
        console.log("Motorcycle Order-" + this.orderNumber + "\n\n        Make " + this.make + "\n\n        Model " + this.model + "\n\n        Sunroof " + this.sunroof + "\n");
    };
    return VehicleOrderNewRequirement;
}());
var carOrder234 = new VehicleOrderNewRequirement(234, "hyundai", "i10", true);
carOrder234.orderCar();
var motorcycleOrder234 = new VehicleOrderNewRequirement(234, "Honda", "X-ADV 750", false);
motorcycleOrder234.orderMotorcycle();
