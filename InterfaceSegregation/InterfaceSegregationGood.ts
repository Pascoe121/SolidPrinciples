
//Example - Good
//Interface Segregation is about creating a series of smaller and more specific interfaces that are implemented by the class.
//Each interface should provides an single behavior.
interface Oven {
    heatOven(temperature: number);
}

interface Microwave {
    runMircowave(duration: number, defrost: boolean);
}

interface SelfClean {
    runClean();
}

//Only has to implement the interface that is specific to the behaviour it requires.
export class SimpleOven implements Oven {
    heatOven(temperature: number) {
        console.log(`Oven heating to ${temperature}°C`);
    }
}

//Better to have multiple implements/interfaces than an overloaded interface.
//As you can see the SimpleOven only needed an Oven interface but this MegaOven can have the behaviour of Oven, Microwave, SelfClean
export class MegaOven implements Oven, Microwave, SelfClean {
    heatOven(temperature: number) {
        console.log(`Oven heating to ${temperature}°C`);
    }
    runMircowave(duration: number, defrost: boolean) {
        if(defrost){
            console.log(`Defrosting for ${duration} seconds`);
        } else {
            console.log(`Heating for ${duration} seconds`);
        }
    }
    runClean() {
        console.log(`Starting cleaning cycle`);
    }
}

const simpleOven = new SimpleOven;
simpleOven.heatOven(160); // Oven heating to 160°C
const megaOven = new MegaOven;
megaOven.heatOven(180); // Oven heating to 180°C
megaOven.runMircowave(60,false); // Heating for 60 seconds
megaOven.runMircowave(480,true); // Defrosting for 480 seconds
megaOven.runClean(); // Starting cleaning cycle