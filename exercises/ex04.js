let totalNumber = 0;

$("#needy-button").click(function() {
  // 每次点击加3
  totalNumber = totalNumber + 3;

  // 检查是否超过99
  if (totalNumber > 99) {
    $("#needy-button").html("💥 战斗力爆了！！！");
    totalNumber = 0; // 重置为0
  } else {
    // 没超过就显示当前战斗力
    let sentence = "战斗力增加 ";
    let sentence_end = " 点！";
    $("#needy-button").html(sentence + totalNumber + sentence_end);
  }
});

// add a button titled "Click me"  

// 每次点击+3

// 设置文字

  // 显示在按钮上

