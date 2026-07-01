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
