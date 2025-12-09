// To currying the Fns -> 2 ways -> closures , bind Method

// Function Curying -> Definig a base fn and use it for use

let multiple = (x, y) => {
  console.log(x * y);
};

let multipleByTwo = multiple.bind(this, 2);
multipleByTwo(5);

let multipleByThree = multiple.bind(this, 3);
multipleByThree(5);

let multipleByFour = multiple.bind(this, 4, 5);
multipleByFour();


// By Clousers
let addition = (x) => {
  return (y) => {
    console.log(x + y);
  };
};

let sumOfTwo = addition(2);
sumOfTwo(3);
