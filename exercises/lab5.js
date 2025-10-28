function askNumber(whatNumber) {
  let userNumber = prompt("Guess 1-10?");
  
  if (userNumber === whatNumber) {
    $("#output").html("You got it!");
  } else {
    $("#output").html("Noooooope");
  }
}

// ✅ 放在函数外部
$("#good-button").click(function () {
  askNumber(5); // 这里你可以改成其他数字，比如 askNumber(7)
});