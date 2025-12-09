  <h1>Special Fns in JS</h1>
    <p>Call () Method is used to borrow the fn from objects</p>
    <p>
      apply() Method is Same as Call() Method but the difference is How passing
      the arguments
    </p>
    <p>
      bind() Method is same as Call() Method but Bind() Method doesn't calls
      directly Method
    </p>
    <p>
      Instead of Calling , it will takes the copy of the Method and Which can be
      called it Later
    </p>

```bash
# Person1 with printName method
const Person1 = {
  name: "RAMALAGAR",
  age: Infinity,
  printName: function (state, hometown) {
    console.log(
      `Name:${this.name} and Age:${this.age} and State:${state} and HomeTown:${hometown}`
    );
    renderCard(this.name, this.age, state, hometown);
  },
};

# Person2 without printName method
const Person2 = {
  name: "KARTHIKEYAN R",
  age: 22,
};

#  Borrow printName from Person1 for Person2 using call()

#  Call printName normally on Person1
Person1.printName("TamilNadu", "Madurai");
```

``` bash
# Call() 
Person1.printName.call(Person2, "TamilNadu", "Chennai");


# Apply()
Person1.printName.apply(Person2, ["TamilNadu", "Chennai"]);


# Bind()
let PrintInfo = Person1.printName.bind(Person2, "TamilNadu", "Chennai");
PrintInfo();
```

# DOM Code Snipet
```bash
// Function to render card
function renderCard(name, age, state, hometown) {
  const container = document.getElementById("container");
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <h2>${name}</h2>
        <p>Age: ${age}</p>
        <p>State: ${state}</p>
        <p>Home Town: ${hometown}</p>
      `;
  container.appendChild(card);
}
```
---
# Polyfils is a browser fallback in the case of browser doesn't having the bind() Method

###  Bind() 
- creates the copy of the fn 
- return as function 
- manually needs to invoke these returned function


### Polyfils are our own implementation bind() Method

- need to keep our fn as access to any/all methods -> <b>Function.prototype</b>
- needs to returns Function -> to invoke later
- needs to take refrence of the Point out method(original Method) -> <b>this -> refres to orginal method</b>
- need to accepts the arguments passing from our own bind() Method -> <b>[...args]</b>
- need to pass the parameter to our refrence object -> by using <b>apply()</b>
- need to pass the  other parameters and parameters from function invoke time.

```bash
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

#  our Own Bind()
Function.prototype.myBind = function (thisArg,...params2) {
  let printInfo = this; // actually refres to that printInfo ()
  return function (...args2) {
    printInfo.apply(args[0], [...params2, ...args2]);
  };
};

let Person2 = printInfo.bind(Person1, "Chennai", "TamilNadu");
Person2("India");
```