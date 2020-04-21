class Person {
    name: string;
    age: number;
    alive: boolean;

    constructor(name: string, age: number, alive: boolean) {
        this.name = name;
        this.age = age;
        this.alive = alive;
    }

    personStatus(): void {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("Alive : " + this.alive);
    }
}

var dave = new Person("Dave", 40, true);

console.log(dave);

dave.personStatus();