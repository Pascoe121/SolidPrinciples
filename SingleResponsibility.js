class Person {
    constructor(name, age, alive) {
        this.name = name;
        this.age = age;
        this.alive = alive;
    }
    personStatus() {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("Alive : " + this.alive);
    }
}
let dave = new Person("Dave", 40, true);
console.log(dave);
dave.personStatus();
//# sourceMappingURL=SingleResponsibility.js.map