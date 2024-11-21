let numbers = [];
let number;

while ((number = parseInt(prompt("Enter a number (0 to stop):"))) !== 0) {
  numbers.push(number);
}
numbers.sort((a, b) => b - a);
for (let num of numbers) {
  console.log(num);
}
