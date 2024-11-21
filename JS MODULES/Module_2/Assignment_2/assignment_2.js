let numParticipants = parseInt(prompt("Number of participants:"));
let participants = [];
for (let i = 0; i < numParticipants; i++) {
  participants.push(prompt(`Name of participant ${i + 1}:`));
}

participants.sort();
let list = "<ol>";
for (let name of participants) {
  list += `<li>${name}</li>`;
}
list += "</ol>";

document.body.innerHTML = list;
