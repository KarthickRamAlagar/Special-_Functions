// Prototype  which have defined to another object acessing the property and methods from one object
// It is used when we call the inbuild methods in array , object and function

let personInfo = {
  name: "RamAlagar",
  city: "Madurai",
  getInfo: function () {
    console.log(`Name:${this.name} ,City:${this.city} `);
  },
};

console.log(personInfo.getInfo()); // Name:RamAlagar ,City:Madurai

let PersonInstance = {
  name: "Karthikeyan R",
  city: "Madurai",
};

// Don't try these Method
PersonInstance.__proto__ = personInfo; // depricated

//Modern Syntax
personInfo.getInfo.call(PersonInstance);
