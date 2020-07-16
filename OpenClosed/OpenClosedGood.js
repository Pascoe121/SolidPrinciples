"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//Example - Good
var VehicleOrder = /** @class */ (function () {
    function VehicleOrder(orderNumber, make, model) {
        this.make = make;
        this.model = model;
        this.orderNumber = orderNumber;
    }
    return VehicleOrder;
}());
exports.VehicleOrder = VehicleOrder;
var CarOrder = /** @class */ (function (_super) {
    __extends(CarOrder, _super);
    function CarOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarOrder.prototype.orderCar = function () {
        console.log("Car Order-" + this.orderNumber + "\n" +
            ("Make " + this.make + "\n") +
            ("Model " + this.model + "\n"));
    };
    return CarOrder;
}(VehicleOrder));
exports.CarOrder = CarOrder;
var MotorcycleOrder = /** @class */ (function (_super) {
    __extends(MotorcycleOrder, _super);
    function MotorcycleOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotorcycleOrder.prototype.orderMotorcycle = function () {
        console.log("Motorcycle Order-" + this.orderNumber + "\n" +
            ("Make " + this.make + "\n") +
            ("Model " + this.model + "\n"));
    };
    return MotorcycleOrder;
}(VehicleOrder));
exports.MotorcycleOrder = MotorcycleOrder;
var carOrder123 = new CarOrder(123, "hyundai", "i10");
carOrder123.orderCar();
var motorcycleOrder123 = new MotorcycleOrder(123, "Honda", "X-ADV 750");
motorcycleOrder123.orderMotorcycle();
//Example - when new requirement comes in the base class doesn't need any changes
//Additional requirements can be added to the logical child constructors
var CarOrderNewRequirement = /** @class */ (function (_super) {
    __extends(CarOrderNewRequirement, _super);
    function CarOrderNewRequirement(orderNumber, make, model, sunroof) {
        var _this = _super.call(this, orderNumber, make, model) || this;
        _this.sunroof = sunroof;
        return _this;
    }
    CarOrderNewRequirement.prototype.orderCar = function () {
        console.log("Car Order-" + this.orderNumber + "\n" +
            ("Make " + this.make + "\n") +
            ("Model " + this.model + "\n") +
            ("Sunroof " + this.sunroof + "\n"));
    };
    return CarOrderNewRequirement;
}(VehicleOrder));
exports.CarOrderNewRequirement = CarOrderNewRequirement;
var MotorcycleOrderNewRequirement = /** @class */ (function (_super) {
    __extends(MotorcycleOrderNewRequirement, _super);
    function MotorcycleOrderNewRequirement(orderNumber, make, model, sidecar) {
        var _this = _super.call(this, orderNumber, make, model) || this;
        _this.sidecar = sidecar;
        return _this;
    }
    MotorcycleOrderNewRequirement.prototype.orderMotorcycle = function () {
        console.log("Motorcycle Order-" + this.orderNumber + "\n" +
            ("Make " + this.make + "\n") +
            ("Model " + this.model + "\n") +
            ("Sidecar " + this.sidecar + "\n"));
    };
    return MotorcycleOrderNewRequirement;
}(VehicleOrder));
exports.MotorcycleOrderNewRequirement = MotorcycleOrderNewRequirement;
var carOrder234 = new CarOrderNewRequirement(234, "hyundai", "i10", true);
carOrder234.orderCar();
var motorcycleOrder234 = new MotorcycleOrderNewRequirement(234, "Harley Davidson", "Street 750", true);
motorcycleOrder234.orderMotorcycle();
