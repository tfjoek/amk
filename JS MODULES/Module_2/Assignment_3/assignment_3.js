let dogNames = [];
for (let i = 0; i < 6; i++) {
  dogNames.push(prompt(`Enter the name of the dog ${i + 1}:`));
}

dogNames.sort().reverse();
let list = "<ul>";
for (let name of dogNames) {
  list += `<li>${name}</li>`;
}
list += "</ul>";

document.body.innerHTML = list;
