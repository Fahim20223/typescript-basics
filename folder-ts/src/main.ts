const ageCal = (name: string = "fahim", age: number = 30): void => {
  // return `Hi ${name}, you are ${age} old`;
  // return age;
  // return name;
  console.log(`Hi ${name}`);
};

ageCal();

// if the function returns nothing then we call it void .... we can see it line number 1 where that we calls void because inside the function we just console.log() but not returns ...

const ageCal2 = (name: string = "fahim", age: number = 30): string => {
  return `hi ${name} , you are age is ${age}`;
};

ageCal2();

const info = (name: string) => {
  throw new Error("");
};

// Array

// const food: (string | number | boolean)[] = [
//   "alo",
//   "potol",
//   "lao",
//   "kumra",
//   10,
//   true,
//   false,
// ];
const food: string[] = ["alo", "potol", "lao", "kumra"];

// food.push(20);

food.push("aam");
food.push("jam");
food.push("kathal");
food.push("yamal");

console.log(food);

//: string[] dicchi mane string thakbe bitore kintu ta hobeh array er bhitore... ekhane onno type dea jabeh na like number, ..... but jodi union use kori tahole dite parbo...

const devs: [string, number, boolean] = ["fahim Shahrier", 30, false];

devs[0] = "jibon";

console.log(devs);
