let year = parseInt(prompt("Enter a year:"));
let isLeapYear;
if (year % 4 === 0) {
  if (year % 100 === 0) {
    isLeapYear = year % 400 === 0;
  } else {
    isLeapYear = true;
  }
} else {
  isLeapYear = false;
}

document.body.innerHTML = isLeapYear
  ? `${year} is a leap year.`
  : `${year} is not a leap year.`;
