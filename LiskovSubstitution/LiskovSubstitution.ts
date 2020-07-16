//Example Liskov Substitution - The abiility to replace any instance of a parent class with
// an instance of one of its child classes without negative side effects.

//Declare class with the responsibility to perpare a salad from some ingredients.
interface ISaladService {
    prepareSalad(ingredients: string[]): string;
}

//Implement the above interface with some functionality on how to prepare a leafy salad.
export class LeafySaladService implements ISaladService {
    prepareSalad(ingredients: string[]): string {
        return `Leafy salad made of ${ingredients.join(", ")}`;
    }
}

//Create a chef class with a dependecy on the ISaladService, regardless if it is a leafy salad or not.
export class ChefController {
    private _saladService: ISaladService;
    constructor(saladService: ISaladService) {
        this._saladService = saladService;
    }
    public createSalad(ingredients: string[]): void {
        console.log(this._saladService.prepareSalad(ingredients));
    }
}

//Now create an instance of the chef and have him make a leafy salad.
let chefController = new ChefController(new LeafySaladService());
chefController.createSalad(["lettuce, tomatoes, cucumber"]); //OUTPUT = Leafy salad made of lettuce, tomatoes, cucumber

//Liskovs substitution principle allows us to replace the leafy salad with another implementation in this case a fruit salad.
//This is all on the agreement that it has the same base type.
export class FruitSaladService implements ISaladService {
    prepareSalad(ingredients: string[]): string {
        return `Fruit salad made of ${ingredients.join(", ")}`;
    }
}

//By following Liskovs substitution principle we can now use the FruitSaladService instead of the LeafySaladService.
//The great thing is due to following LSP we don't have to worry about the ChefController code being affected by this change.
chefController = new ChefController(new FruitSaladService());
chefController.createSalad(["mango, pinapple, bannana"]); //OUTPUT = Fruit salad made of mango, pinapple, bannana