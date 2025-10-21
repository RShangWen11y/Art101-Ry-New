// ==========================
// Environment: Ave Mujica
// ==========================

// 1️⃣ Title variable
let title = "(Ave Mujica) The World of Dolls";

// 2️⃣ Elements array
let elements = ["Fire", "Water", "Wind", "Earth", "Ether"];

// // 3️⃣ Objects: character, animal, instrument
let character = {
  name: "Nyamu",
  type: "Character",   // 人物
  category: "Person",
  friendliness: "Unknown"
};

let animal = {
  name: "Cat",
  type: "Animal",      // 猫
  category: "Creature",
  friendliness: "Unknown"
};

let instrument = {
  name: "Drum",
  type: "Instrument",  // 乐器
  category: "Object",
  friendliness: "Unknown"
};

// 4️⃣ Use jQuery to dynamically print content onto the webpage
$("#output").append(`<h2>${title}</h2>`);

// Element list
$("#output").append("<h3>Elements in this Environment:</h3>");
$("#output").append("<ul id='elementList'></ul>");
for (let i = 0; i < elements.length; i++) {
  $("#elementList").append(`<li>${elements[i]}</li>`);
}

// Output object info
$("#output").append("<h3>Entities Existing in This World:</h3>");
$("#output").append(`
  <p><strong>${character.role}:</strong> ${character.name} (Friendliness: ${character.friendliness})</p>
  <p><strong>${animal.role}:</strong> ${animal.name} (Friendliness: ${animal.friendliness})</p>
  <p><strong>${instrument.role}:</strong> ${instrument.name} (Friendliness: ${instrument.friendliness})</p>
`);