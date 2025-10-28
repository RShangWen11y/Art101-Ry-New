// env04.js
$(document).ready(function () {
  console.log("env04.js is loaded!");

  // 1️⃣ 切换角色图片函数（带参数）
  function changeCharacter(currentImg, newImg, shouldChange) {
    if (shouldChange) {
      $(".character img").attr("src", newImg);
    } else {
      $(".character img").attr("src", currentImg);
    }
  }

  // 添加切换图片的按钮
  const imgButton = $("<button>Switch character images</button>");
  $("#output").append(imgButton);

  // 当前状态（true = 显示 character.JPG）
  let showingFirst = true;

  imgButton.on("click", function () {
    showingFirst = !showingFirst;
    changeCharacter(
      "character.JPG",
      "character2.JPG",
      !showingFirst // true 时切换成第二张
    );
  });

  // 2️⃣ 生成随机数函数（带参数）
  function showRandom(min, max, message) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(`${message} ${randomValue}`);
  }

  // 在文本下添加按钮
  const randomButton = $("<button>Random value </button>");
  $(".intro").after(randomButton);

  randomButton.on("click", function () {
    // 传入多个参数：最小值、最大值、提示信息
    showRandom(1, 100, "Her mood value：");
  });
});