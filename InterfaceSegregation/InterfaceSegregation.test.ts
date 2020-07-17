import { SimpleOven, MegaOven } from './InterfaceSegregationGood';

describe('SimpleOven', () => {
    it('heatOven should log out the correct temperature', async () => {
        //Arrange
        let simpleOven: SimpleOven = new SimpleOven();
        //Mock
        console.log = jest.fn();

        //Act
        simpleOven.heatOven(180);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Oven heating to 180°C");
    });
});

describe('MegaOven', () => {
    it('heatOven should log out the correct temperature', async () => {
        //Arrange
        let megaOven: MegaOven = new MegaOven();
        //Mock
        console.log = jest.fn();

        //Act
        megaOven.heatOven(180);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Oven heating to 180°C");
    });

    it('runMicrowave not on defrost should log out the correct duration and mode', async () => {
        //Arrange
        let megaOven: MegaOven = new MegaOven();
        //Mock
        console.log = jest.fn();

        //Act
        megaOven.runMircowave(60, false);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Heating for 60 seconds");
    });

    it('runMicrowave on defrost should log out the correct duration and mode', async () => {
        //Arrange
        let megaOven: MegaOven = new MegaOven();
        //Mock
        console.log = jest.fn();

        //Act
        megaOven.runMircowave(480, true);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Defrosting for 480 seconds");
    });

    it('runClean should log out the process has started', async () => {
        //Arrange
        let megaOven: MegaOven = new MegaOven();
        //Mock
        console.log = jest.fn();

        //Act
        megaOven.runClean();

        //Assert
        expect(console.log).toHaveBeenCalledWith("Starting cleaning cycle");
    });
});
