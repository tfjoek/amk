let name = prompt("Enter your name:");
let randomHouse = Math.ceil(Math.random() * 4);
let house;
if (randomHouse === 1) {
  house = "Gryffindor";
} else if (randomHouse === 2) {
  house = "Slytherin";
} else if (randomHouse === 3) {
  house = "Hufflepuff";
} else {
  house = "Ravenclaw";
}

document.body.innerHTML = `${name}, you are ${house}.`;
