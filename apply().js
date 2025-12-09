// Person1 with printName method
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

// Person2 without printName method
const Person2 = {
  name: "KARTHIKEYAN R",
  age: 22,
};

// Call printName normally on Person1
Person1.printName("TamilNadu", "Madurai");

// Borrow printName from Person1 for Person2 using call()
Person1.printName.apply(Person2, ["TamilNadu", "Chennai"]);

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
