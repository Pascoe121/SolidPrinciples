import { ChefController, LeafySaladService, FruitSaladService } from './LiskovSubstitution';

describe('ChefController', () => {
    it('createSalad should log out the correct salad depending on ingredients and use of LeafySaladService', async () => {
        //Arrange
        let chefController: ChefController = new ChefController(new LeafySaladService());
        const ingredients: string[] = ["lettuce, tomatoes, cucumber"];
        //Mock
        console.log = jest.fn();

        //Act
        chefController.createSalad(ingredients);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Leafy salad made of lettuce, tomatoes, cucumber");
    });

    it('createSalad should log out the correct salad depending on ingredients and use of FruitSaladService', async () => {
        //Arrange
        let chefController: ChefController = new ChefController(new FruitSaladService());
        const ingredients: string[] = ["mango, pinapple, bannana"];
        //Mock
        console.log = jest.fn();

        //Act
        chefController.createSalad(ingredients);

        //Assert
        expect(console.log).toHaveBeenCalledWith("Fruit salad made of mango, pinapple, bannana");
    });
});

describe('LeafySaladService', () => {
    it('prepareSalad should return a string of the correct salad ingredients', async () => {
        //Arrange
        let saladService: LeafySaladService = new LeafySaladService;
        const ingredients: string[] = ["lettuce, tomatoes, cucumber"];

        //Act
        let salad = saladService.prepareSalad(ingredients);

        //Assert
        expect(salad).toBe("Leafy salad made of lettuce, tomatoes, cucumber");
    });
});

describe('FruitSaladService', () => {
    it('prepareSalad should return a string of the correct salad ingredients', async () => {
        //Arrange
        let saladService: FruitSaladService = new FruitSaladService;
        const ingredients: string[] = ["mango, pinapple, bannana"];

        //Act
        let salad = saladService.prepareSalad(ingredients);

        //Assert
        expect(salad).toBe("Fruit salad made of mango, pinapple, bannana");
    });
});
