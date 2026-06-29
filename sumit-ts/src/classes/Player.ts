import { IsPlayer } from "../interfaces/IsPlayer.js";
export class Player implements IsPlayer {
  // private name: string;
  // age: number; //=>public by-default thAke tai diTe hoi na
  // readonly country: string;

  // constructor(n: string, a: number, c: string) {
  //   this.name = n;
  //   this.age = a;
  //   this.country = c;
  // }

  constructor(
    public name: string,
    private age: number,
    readonly country: string,
  ) {}

  getProperty() {
    return this.age;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}
