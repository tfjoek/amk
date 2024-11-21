function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
  let rolls = [];
  let roll;
  
  while ((roll = rollDice()) !== 6) {
    rolls.push(roll);
  }
  rolls.push(6);
  
  let list = "<ul>";
  for (let result of rolls) {
    list += `<li>${result}</li>`;
  }
  list += "</ul>";
  
  document.body.innerHTML = list;
  