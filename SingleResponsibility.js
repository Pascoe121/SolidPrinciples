var Person = /** @class */ (function () {
    function Person(name, age, alive) {
        this.name = name;
        this.age = age;
        this.alive = alive;
    }
    Person.prototype.personStatus = function () {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("Alive : " + this.alive);
    };
    return Person;
}());
var dave = new Person("Dave", 40, true);
console.log(dave);
dave.personStatus();
//# sourceMappingURL=SingleResponsibility.js.map