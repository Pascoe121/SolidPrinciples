"use strict";
//Example Liskov Substitution - The abiility to replace any instance of a parent class with
// an instance of one of its child classes without negative side effects.
exports.__esModule = true;
//Implement the above interface with some functionality on how to prepare a leafy salad.
var LeafySaladService = /** @class */ (function () {
    function LeafySaladService() {
    }
    LeafySaladService.prototype.prepareSalad = function (ingredients) {
        return "Leafy salad made of " + ingredients.join(", ");
    };
    return LeafySaladService;
}());
exports.LeafySaladService = LeafySaladService;
//Create a chef class with a dependecy on the ISaladService, regardless if it is a leafy salad or not.
var ChefController = /** @class */ (function () {
    function ChefController(saladService) {
        this._saladService = saladService;
    }
    ChefController.prototype.createSalad = function (ingredients) {
        console.log(this._saladService.prepareSalad(ingredients));
    };
    return ChefController;
}());
exports.ChefController = ChefController;
//Now create an instance of the chef and have him make a leafy salad.
var chefController = new ChefController(new LeafySaladService());
chefController.createSalad(["lettuce, tomatoes, cucumber"]); //OUTPUT = Leafy salad made of lettuce, tomatoes, cucumber
//Liskovs substitution principle allows us to replace the leafy salad with another implementation in this case a fruit salad.
//This is all on the agreement that it has the same base type.
var FruitSaladService = /** @class */ (function () {
    function FruitSaladService() {
    }
    FruitSaladService.prototype.prepareSalad = function (ingredients) {
        return "Fruit salad made of " + ingredients.join(", ");
    };
    return FruitSaladService;
}());
exports.FruitSaladService = FruitSaladService;
//By following Liskovs substitution principle we can now use the FruitSaladService instead of the LeafySaladService.
//The great thing is due to following LSP we don't have to worry about the ChefController code being affected by this change.
chefController = new ChefController(new FruitSaladService());
chefController.createSalad(["mango, pinapple, bannana"]); //OUTPUT = Fruit salad made of mango, pinapple, bannana
