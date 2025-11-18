// env06.js

$(function () {
  const $area = $("#nym-area");
  const $videoMove = $("#nym-magic-base-Move");      // 跟随鼠标的
  const $videoInteract = $("#nym-base-Interact-x1"); // 互动动画

  let isInteracting = false; // 是否当前在互动状态

  // ========== 跟随鼠标移动（只在非互动时） ==========
  $area.on("mousemove", function (e) {
    if (isInteracting) return; // 互动状态下不动

    const offset = $area.offset();
    const areaWidth = $area.width();
    const areaHeight = $area.height();

    const relX = e.pageX - offset.left;
    const relY = e.pageY - offset.top;

    const videoHalfW = $videoMove.outerWidth() / 2;
    const videoHalfH = $videoMove.outerHeight() / 2;

    let x = relX;
    let y = relY;

    // 限制在 380 × 380 范围内
    if (x < videoHalfW) x = videoHalfW;
    if (x > areaWidth - videoHalfW) x = areaWidth - videoHalfW;

    if (y < videoHalfH) y = videoHalfH;
    if (y > areaHeight - videoHalfH) y = areaHeight - videoHalfH;

    $videoMove.css({
      left: x + "px",
      top: y + "px",
      transform: "translate(-50%, -50%)"
    });
  });

  $area.on("mouseleave", function () {
    if (isInteracting) return; // 互动中就保持原地
    $videoMove.css({
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    });
  });

  // ========== 点击触发互动动画 ==========
  $area.on("click", function () {
    if (isInteracting) return; // 已经在互动，就不重复触发

    isInteracting = true;
    $area.addClass("interacting"); // 加淡紫背景

    // 读取当前移动版的位置（相对于 #nym-area）
    const pos = $videoMove.position(); // { top: ?, left: ? }

    // 把互动版放到同样的位置
    $videoInteract.css({
      left: pos.left + $videoMove.outerWidth() / 2 + "px",
      top: pos.top + $videoMove.outerHeight() / 2 + "px",
      transform: "translate(-50%, -50%)"
    });

    // 切换可见性
    $videoMove.hide();
    $videoInteract.show();

    // 从头播放互动动画
    const domInteract = $videoInteract.get(0);
    domInteract.currentTime = 0;
    domInteract.play();
  });

  // 互动动画播完后，恢复状态
  $videoInteract.on("ended", function () {
    isInteracting = false;
    $area.removeClass("interacting");

    $videoInteract.hide();
    $videoMove.show();

    // 回到中心，重新开始跟随
    $videoMove.css({
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    });

    const domMove = $videoMove.get(0);
    domMove.play(); // 确保继续 loop
  });
});

$(function () {
  // ========= Mask A：点击消失，10 秒后再出现 =========
  const $maskA = $("#masksA");
  let maskATimer = null;

  $maskA.on("click", function () {
    $maskA.fadeOut(300);         // 消失动画
    clearTimeout(maskATimer);
    maskATimer = setTimeout(function () {
      $maskA.fadeIn(300);        // 10 秒后再出现
    }, 10000);
  });

  // ========= Mask B：替换成 nymu-mask，点击跟随鼠标，再次点击停住，5 秒后回原位 =========
  const $maskB = $("#masksB");
  let isFollowing = false;
  let revertTimer = null;

  // 记录一开始的位置（回原位要用）
  const originalOffset = $maskB.offset();

  // 鼠标移动时的 handler（先声明，后面开关）
  function followMouse(e) {
    const halfW = $maskB.outerWidth() / 2;
    const halfH = $maskB.outerHeight() / 2;

    $maskB.css({
      left: e.clientX - halfW + "px",
      top: e.clientY - halfH + "px"
    });
  }

  $maskB.on("click", function (e) {
    e.stopPropagation();

    // 第一次点击：开始跟随
    if (!isFollowing) {
      isFollowing = true;
      clearTimeout(revertTimer);

      $maskB.addClass("following");     // position: fixed
      $(document).on("mousemove.maskFollow", followMouse);

    } else {
      // 第二次点击：停止跟随，停在当前位置
      isFollowing = false;
      $(document).off("mousemove.maskFollow");

      // 5 秒后回到原来的位置
      clearTimeout(revertTimer);
      revertTimer = setTimeout(function () {
        $maskB.removeClass("following");
        $maskB.css({
          left: originalOffset.left + "px",
          top: originalOffset.top + "px"
        });
      }, 5000);
    }
  });
});
