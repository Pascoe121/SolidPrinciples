import { VehicleOrder, CarOrder, MotorcycleOrder, CarOrderNewRequirement, MotorcycleOrderNewRequirement } from './OpenClosedGood';

describe('VehicleOrder', () => {
    it('VehicleOrder constructor should create an instance of VehicleOrder with defined properties', async () => {
        //Arrange
        let vehicleOrder: VehicleOrder = new VehicleOrder(123, "test make", "test model");

        //Assert
        expect(vehicleOrder).toBeInstanceOf(VehicleOrder);
        expect(vehicleOrder.orderNumber).toBe(123);
        expect(vehicleOrder.make).toBe("test make");
        expect(vehicleOrder.model).toBe("test model");
    });
});

describe('CarOrder', () => {
    it('orderCar should log out the correct information for an order', async () => {
        //Arrange
        let carOrder: CarOrder = new CarOrder(123, "test make", "test model");
        //Mock
        console.log = jest.fn();

        //Act
        carOrder.orderCar();

        //Assert
        expect(console.log).toHaveBeenCalledWith("Car Order-123\nMake test make\nModel test model\n");
    });
});

describe('MotorcycleOrder', () => {
    it('orderMotorcycle should log out the correct information for an order', async () => {
        //Arrange
        let motorcycleOrder: MotorcycleOrder = new MotorcycleOrder(123, "test make", "test model");
        //Mock
        console.log = jest.fn();

        //Act
        motorcycleOrder.orderMotorcycle();

        //Assert
        expect(console.log).toHaveBeenCalledWith("Motorcycle Order-123\nMake test make\nModel test model\n");
    });
});

describe('CarOrderNewRequirment', () => {
    it('orderCar should log out the correct information for an order', async () => {
        //Arrange
        let carOrder: CarOrderNewRequirement = new CarOrderNewRequirement(123, "test make", "test model", false);
        //Mock
        console.log = jest.fn();

        //Act
        carOrder.orderCar();

        //Assert
        expect(console.log).toHaveBeenCalledWith("Car Order-123\nMake test make\nModel test model\nSunroof false\n");
    });
});

describe('MotorcycleOrderNewRequirment', () => {
    it('orderMotorcycle should log out the correct information for an order', async () => {
        //Arrange
        let motorcycleOrder: MotorcycleOrderNewRequirement = new MotorcycleOrderNewRequirement(123, "test make", "test model", true);
        //Mock
        console.log = jest.fn();

        //Act
        motorcycleOrder.orderMotorcycle();

        //Assert
        expect(console.log).toHaveBeenCalledWith("Motorcycle Order-123\nMake test make\nModel test model\nSidecar true\n");
    });
});