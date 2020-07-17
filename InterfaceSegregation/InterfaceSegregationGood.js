//Only has to implement the interface that is specific to the behaviour it requires.
var SimpleOven = /** @class */ (function () {
    function SimpleOven() {
    }
    SimpleOven.prototype.heatOven = function (temperature) {
        console.log("Oven heating to " + temperature + "\u00B0C");
    };
    return SimpleOven;
}());
//Better to have multiple implements/interfaces than an overloaded interface.
//As you can see the SimpleOven only needed an Oven interface but this MegaOven can have the behaviour of Oven, Microwave, SelfClean
var MegaOven = /** @class */ (function () {
    function MegaOven() {
    }
    MegaOven.prototype.heatOven = function (temperature) {
        console.log("Oven heating to " + temperature + "\u00B0C");
    };
    MegaOven.prototype.runMircowave = function (duration, defrost) {
        if (defrost) {
            console.log("Defrosting for " + duration + " seconds");
        }
        else {
            console.log("Heating for " + duration + " seconds");
        }
    };
    MegaOven.prototype.runClean = function () {
        console.log("Starting cleaning cycle");
    };
    return MegaOven;
}());
var simpleOven = new SimpleOven;
simpleOven.heatOven(160);
var megaOven = new MegaOven;
megaOven.heatOven(180);
megaOven.runMircowave(60, false);
megaOven.runMircowave(480, true);
megaOven.runClean();
