import { IsPlayer } from "../interfaces/IsPlayer.js";
export class Player {
    // private name: string;
    // age: number; //=>public by-default thAke tai diTe hoi na
    // readonly country: string;
    // constructor(n: string, a: number, c: string) {
    //   this.name = n;
    //   this.age = a;
    //   this.country = c;
    // }
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing!`);
    }
}
//# sourceMappingURL=Player.js.map