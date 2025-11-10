// env05.js
$(document).ready(function () {
  console.log("env05.js is loaded!");

  // 1) 角色图片切换（保留）
  function changeCharacter(currentImg, newImg, shouldChange) {
    $(".character img").attr("src", shouldChange ? newImg : currentImg);
  }
  const imgButton = $("<button>Switch character images</button>");
  $("#output").append(imgButton);
  let showingFirst = true;
  imgButton.on("click", function () {
    showingFirst = !showingFirst;
    changeCharacter("character.JPG", "character2.JPG", !showingFirst);
  });

  // 2) moon1.jpg 改为右侧“上下移动”；hover 暂停，移开继续
  const $scene = $("#moon");   // footer 轨道容器
  const $moon  = $("#moon1");  // 月亮图
  const CYCLE_MS = 20000;      // 放慢一倍：原 10000ms -> 20000ms
  let isPaused = false;
  let goingUp = false;         // 方向：false 向上？我们用 bottom 属性，数值增大 = 往上“凸出”更少，故用 range 和 0 切换

  function placeMoonAtRightBottom() {
    // 初始固定在右下角
    $moon.css({ bottom: 0 });
  }

  function oscillate() {
    if (isPaused) return;

   const sceneH = $scene.innerHeight();
    const moonH  = $moon.outerHeight();
    /* 原来：const range = Math.max(0, sceneH - moonH); */
    const range = Math.max(40, sceneH - moonH); // 至少上下动 40px

    // 目标 bottom：在 0 与 range 之间来回
    const targetBottom = goingUp ? 0 : range;
    const distance = Math.abs((parseFloat($moon.css("bottom")) || 0) - targetBottom);
    // 匀速：按剩余距离占总距离的比例分配时间
    const duration = Math.max(200, CYCLE_MS * (distance / Math.max(1, range)));

    $moon
      .stop(true, false)
      .animate({ bottom: targetBottom }, duration, "linear", function () {
        if (!isPaused) {
          goingUp = !goingUp;
          oscillate();
        }
      });
  }

  // 悬停 footer：暂停/继续
  $scene.hover(
    function () {
      isPaused = true;
      $moon.stop(false, false); // 停在当前位置
    },
    function () {
      if (isPaused) {
        isPaused = false;
        oscillate();
      }
    }
  );

  // 初始化并开动
  placeMoonAtRightBottom();
  const img = $moon.get(0);
  if (img && img.complete) oscillate();
  else $moon.on("load", oscillate);

  // 3) 插入 WebM 区（无按钮），加提示语；点击视频本体播放/暂停
  const videoSection = $(`
    <section id="video-section">
      <p class="video-hint">请点击视频播放/暂停 · Click the video to Play/Pause</p>
      <video id="anim" preload="auto" src="nym base Interact-x1.webm"></video>
    </section>
  `);
  $(".container").append(videoSection);

  const $video = $("#anim");
  const videoEl = $video.get(0);

  // 点击视频本体：播放/暂停切换
  $video.on("click", function () {
    if (!videoEl) return;
    videoEl.paused ? videoEl.play() : videoEl.pause();
  });

  // 播放结束后回到开头（可选）
  $video.on("ended", function () {
    videoEl.currentTime = 0;
  });
});