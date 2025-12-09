//  Polyfils is a browser fallback in the case of browser doesn't having the bind() Method

// Bind() -> creates the copy of the fn -> return as function -> manually needs to invoke these returned function

const Person1 = {
  name: "RamAlagar",
  age: Infinity,
};

let printInfo = function (homeTown, state, country) {
  console.log(
    `Name:${this.name}, Age:${this.age},HomeTown:${homeTown} , State:${state} ,Country: ${country}`
  );
};

let Person = printInfo.bind(Person1, "Madurai", "TamilNadu");
Person("India");

// our Own Bind()
Function.prototype.myBind = function (thisArg, ...params) {
  let printInfo = this;
  return function (...args) {
    printInfo.apply(thisArg, [...params, ...args]);
  };
};

let Person2 = printInfo.myBind(Person1, "Chennai", "TamilNadu");
Person2("India");