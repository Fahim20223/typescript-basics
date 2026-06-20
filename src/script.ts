// let person = {
//   name: "Mashrafi",
//   age: 25,
//   isCaptain: true,
// };

// person.age = 34;

//Normal variable
// let b: string | number;

// array

// let a: (string | number)[] = [];

// let c: any[] = [];
// c.push("summit", 1, false, true, "fr");

// object
// let d: object;
// let d: {
//   name: string;
//   age: number;
//   adult: boolean;
// };
// d = {
//   name: "summit",
//   age: 23,
//   adult: true,
//   pens: "hi",
// };
// d=[]

// let d: object;

// d = [1, 1, 2, 3];

// let a: string;
// let a: any;
// a = 5;
// a = "summit";

// let a: any[] = [];

// a.push("bangladesh");
// a.push(34);

// // Object
// let b: {
//   name: any;
//   age: any;
// };

// b = {
//   name: 24,
//   age: "number",
// };

// const myFunc = () => {
//   console.log("Hello");
// };
// let myFunc: Function;

// myFunc = () => {
//   console.log("Hello");
// };
// myFunc = 5;

// let myFunc = (a: string, b: string, c: string = "true") => {
//   //   console.log(c);
//   //   console.log(`Hello ${a} ${b}`);
//   return a + b;
// };
// let myFunc = (a: number, b: number, c: string = "true") => {
//   console.log(c);
//   console.log(`Hello ${a} ${b}`);
//   return a + b;
// };

// myFunc("3", "4");
// myFunc("A", "b", "false");
// myFunc(4, 8, "false");

//Type alias =>
// type stringOrNum = string | number;
// type userType = {
//   name: string;
//   age: number;
// };

// const userDetails = (id: stringOrNum, user: userType) => {
//   console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };

// const sayHello = (user: userType) => {
//   console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// };

//functional signature=>
// let add: (x: number, y: number) => number;

// add = (a: number, b: number) => {
//   //   console.log(a + b);=>void
//   return a + b;
// };

// let calculation: (x: number, y: number, z: string) => number;

// calculation = (a: number, b: number, c: string) => {
//   if (c === "add") {
//     return a + b;
//   } else {
//     return a - b;
//   }
// };
// console.log(calculation(5, 6, "add"));

// let userDetails: (
//   id: number | string,
//   userInfo: {
//     name: string;
//     age: number;
//   },
// ) => void;

// userDetails = (
//   id: string | number,
//   user: {
//     name: string;
//     age: number;
//   },
// ) => {};

// Classes in typescript

import { Player } from "./classes/Player.js";
import { IsPlayer } from "./interfaces/IsPlayer.js";

const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
// const sakib = new Player("Sakib", 38, "Bangladesh");

let sakib = new Player("Sakib", 35, "Bangladesh");

// sakib.name = "Mashrafi";
// sakib.age = 40;
// sakib.country = "England";

// console.log(sakib.name);
// console.log(sakib.age);
console.log(sakib.country);

// const players: string[] = [];
// const players: Player[] = [];
const players: IsPlayer[] = [];

// players.push("Sakib")=>not applicable
players.push(sakib);
players.push(mashrafi);

//Interfaces Of TypeScript

//when we user interface in Object =>>>>
interface RectangleOptions {
  width: number;
  length: number;
}

function drawRectangle(options: RectangleOptions) {
  let width = options.width;
  let length = options.length;
}
// function drawRectangle(options: { width: number; length: number }) {
//   let width = options.width;
//   let length = options.length;
// }

let threeDOptions = {
  width: 30,
  length: 40,
  height: 10,
};

drawRectangle(threeDOptions);

// drawRectangle({
//   width: 30,
//   length: 40,
// });

//GENERICS=>>>>>>>

// const addId = <
//   T extends {
//     name: string;
//     age: number;
//   },
// >(
//   obj: T,
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };

// let user = addId({
//   name: "Mashrafi",
//   age: 40,
//   country: "Bangladesh",
// });

// // let user = "Mashrafi"
// addId(user);

// Interface GENERICS

// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }

// const response1: APIResponse<object> = {
//   status: 200,
//   type: "good",
//   data: {
//     name: "Test",
//     something: 300,
//   },
// };

// ENUMS

// enum RType {
//   SUCCESS,
//   FAILURE,
//   UNAUTHENTICATED,
//   FORBIDDEN,
// }

// interface APIResponse<T> {
//   status: number;
//   type: RType;
//   data: T;
// }

// const response1: APIResponse<string> = {
//   status: 200,
//   type: RType.SUCCESS,
//   data: "test",
// };

// console.log(response1);

//TUPLES

let a = [3, "hello", { p: 3 }];

let b: [number, string, object] = [4, "world", { t: 1 }];

// b[1] = 4;

b.push();
