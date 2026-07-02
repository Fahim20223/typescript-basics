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
devs[1] = 40;
devs[2] = false;
devs.push("zero");
// devs.pop(40);

console.log(devs);

// array er moddeh declare korar age bole di konta kon type hobeh etao kora jai like upore korsi & pore amra jokhon notun kichu push korbo sheta typescript nije nije any type dhore nibe that's why push() kora jai but pop() kora jai na...

//Object

// const dev = {
//   name: "Fahim Shahrier",
//   age: 30,
//   skill: false,
// };

// dev.name = "ashraful";
// dev.name = 70 ; => it will not give the permission because name is assign string in that object that's why...

// dev.name = "jamal";
// dev.age = 40;
// dev.skill = true;

const dev: {
  readonly name: string | number | boolean;
  age: number;
  skill?: boolean;
} = {
  name: "fahim shahrier",
  age: 30,
  // skill: false,
};
// dev.name = "fahim";

// skill?: => erkom likhar karon holo skill jodi object er bhitore declare na kori tai optional bhabe dilam skill declare na korleo pera nai mane skill na likhleo pera nai tai "?" die optional dilam than name: string | number | boolean; erkom dilam mane jekono 3 tar moddhe ekta hote pare...

// name er age readonly die disi just bujhar jonne je eta poriborton kora jabeh nah just dekha jabeh tai dev.name die ow kora jabeh na just console.log(dev.name) erkom kore dekhte parbo
