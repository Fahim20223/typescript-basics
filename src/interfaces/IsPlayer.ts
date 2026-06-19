// Interface of the class(Player.ts)
//age interface pore class
export interface IsPlayer {
  name: string;
  // age: number;
  country: string;

  play(): void;
  getProperty(): number;
}
