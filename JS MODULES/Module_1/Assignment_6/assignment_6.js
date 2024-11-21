let shouldCalculate = confirm("Calculate the square root?");
if (shouldCalculate) {
  let number = parseFloat(prompt("Enter a number:"));
  if (number >= 0) {
    let squareRoot = Math.sqrt(number);
    document.body.innerHTML = `The square root of ${number} is ${squareRoot.toFixed(2)}.`;
  } else {
    document.body.innerHTML = "The square root of a negative number is not defined.";
  }
} else {
  document.body.innerHTML = "The square root is not calculated.";
}
