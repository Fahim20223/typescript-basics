export class Player {
  // private name: string;
  // age: number; //=>public by-default thAke tai diTe hoi na
  // readonly country: string;

  // constructor(n: string, a: number, c: string) {
  //   this.name = n;
  //   this.age = a;
  //   this.country = c;
  // }

  constructor(
    private name: string,
    public age: number,
    readonly country: string,
  ) {}

  play() {
    console.log(`${this.name} from ${this.country} is playing!`);
  }
}
