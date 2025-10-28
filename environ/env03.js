// ==========================
// Environment: Ave Mujica
// ==========================

// 1️⃣ Title variable
let title = "(Ave Mujica) The World of Dolls";

// 2️⃣ Elements array
let elements = ["Fire", "Water", "Wind", "Earth", "Ether"];

$(document).ready(function() {
  $("#output").css("opacity", "1");

  // 环境标题与元素
  let title = "(Ave Mujica) The World of Dolls";
  let elements = ["Fire", "Water", "Wind", "Earth", "Aether"];

  // 三个对象：人物、动物、乐器
  let character = {
    name: "Nyamu",
    kind: "Names",
    friendliness: "Unknown"
  };

  let animal = {
    name: "Cat",
    kind: "Animal",
    friendliness: "未知"
  };

  let instrument = {
    name: "Drum",
    kind: "instrument",
    friendliness: "未知"
  };

  // 输出标题与元素
  $("#output").append(`<h2>${title}</h2>`);
  $("#output").append("<h3>Elements in this Environment:</h3>");
  $("#output").append("<ul id='elementList'></ul>");
  for (let i = 0; i < elements.length; i++) {
    $("#elementList").append(`<li>${elements[i]}</li>`);
  }


  $("#output").append("<h3>Entities Existing in This World:</h3>");
  $("#output").append(`
    <p><strong>${character.kind}：</strong>${character.name}</p>
    <p><strong>${animal.kind}：</strong>${animal.name}</p>
    <p><strong>${instrument.kind}：</strong>${instrument.name}</p>
    <p><strong>friendliness：</strong>${character.friendliness}</p>
  `);
});
