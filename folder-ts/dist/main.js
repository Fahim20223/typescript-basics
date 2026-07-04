"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ageCal = (name = "fahim", age = 30) => {
    // return `Hi ${name}, you are ${age} old`;
    // return age;
    // return name;
    console.log(`Hi ${name}`);
};
ageCal();
// if the function returns nothing then we call it void .... we can see it line number 1 where that we calls void because inside the function we just console.log() but not returns ...
const ageCal2 = (name = "fahim", age = 30) => {
    return `hi ${name} , you are age is ${age}`;
};
ageCal2();
const info = (name) => {
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
const food = ["alo", "potol", "lao", "kumra"];
// food.push(20);
food.push("aam");
food.push("jam");
food.push("kathal");
food.push("yamal");
console.log(food);
//: string[] dicchi mane string thakbe bitore kintu ta hobeh array er bhitore... ekhane onno type dea jabeh na like number, ..... but jodi union use kori tahole dite parbo...
const devs = ["fahim Shahrier", 30, false];
devs[0] = "jibon";
devs[1] = 40;
devs[2] = false;
devs.push("zero");
// devs.pop(40);
console.log(devs);
const dev = {
    name: "Fahim Shahrier",
    age: 50,
};
// enum type
var skills;
(function (skills) {
    skills["MERN"] = "MERN Stack";
    skills["LARAVEL"] = "PHP with Laravel";
    skills["DJANGO"] = "Python with Django";
    skills["IOS"] = "Flutter / Native";
})(skills || (skills = {}));
const skill = skills.MERN;
console.log(skill);
//# sourceMappingURL=main.js.map