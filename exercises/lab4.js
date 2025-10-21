// declaring an array with name myCommutes
let myCommutes = ["超大杯", "大杯", "中杯", "小杯", "超小杯"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Guard",                      // 干员类型：近卫
    route: 3,                           // 数字类型（可理解为评级层级或危机合约阶段）
    print: "Toyokawa Shoko (丰川祥子)", // 干员名称
    hasMiddleDoor: false,               // 布尔值
    drivers: ["Hybrid melee Arts damage", "Wide-range slash", "Personal domain field"], // 数组
};

// combine the array and object data into a long sentence
let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " 
  + myCommutes[0] + ", " + myCommutes[1] + "</p>";

megaSentence = megaSentence + 
  "<p>My favourite commute possesses such characteristics: type - " 
  + myFavouriteCommute.type 
  + ", route number " + myFavouriteCommute.route 
  + ", name: " + myFavouriteCommute.print 
  + ", traits: " + myFavouriteCommute.drivers.join(", ") + ".</p>";

// display the result using jQuery
$("#output").html(megaSentence);
