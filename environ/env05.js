// env05.js
$(document).ready(function () {
  // 1. 角色图片切换
  let isFirstChar = true;
  $("<button>Switch character images</button>")
    .appendTo("#output")
    .on("click", function () {
      isFirstChar = !isFirstChar;
      $(".character img").attr("src", isFirstChar ? "character.JPG" : "character2.JPG");
    });

  // 2. 视频播放/暂停
  $(".container").append(`
    <section id="video-section">
      <p class="video-hint">请点击视频播放/暂停 · Click the video to Play/Pause</p>
      <video id="anim" preload="auto" src="nym base Interact-x1.webm"></video>
    </section>
  `);
  const videoEl = $("#anim")[0];
  $("#anim").on("click", () => videoEl.paused ? videoEl.play() : videoEl.pause());
  $("#anim").on("ended", () => videoEl.currentTime = 0);

  // 移除月亮的点击事件（不需要交互）
});

