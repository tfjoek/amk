let numbers = [];
let duplicateFound = false;

while (!duplicateFound) {
  let number = parseInt(prompt("Enter a number:"));
  if (numbers.includes(number)) {
    console.log(`${number} has already been given`);
    duplicateFound = true;
  } else {
    numbers.push(number);
  }
}

numbers.sort((a, b) => a - b);

for (let num of numbers) {
  console.log(num);
}
