/**
 * 当视频暂停时，自动播放，每3秒检查一次
 */

function toast(msg, type = "normal", time = 5000) {
  const backgroundColor = {
    normal: "#1890ff",
    warning: "#faad14",
    error: "#f5222d",
    success: "#52c41a",
  };
  var duration = time;
  var toastTag = document.createElement("div");
  toastTag.style.cssText = `position:fixed;padding:8px 16px;border-radius:6px;background: ${backgroundColor[type]};color:#fff;font-size:16px;z-index:9999;top:10%;left:50%;transform:translate(-10%,-50%);`;
  toastTag.innerHTML = msg;
  document.body.appendChild(toastTag);
  setTimeout(function () {
    document.body.removeChild(toastTag);
  }, duration);
}

var hasVideo = !!document.querySelector("video");

if (!hasVideo) {
  toast("请在视频播放页面执行此脚本", "warning");
} else {
  setInterval(() => {
    var video = document.querySelector("video");
    if (!video) return;
    video.paused && video.play();
  }, 3000);

  toast("已启动自动播放功能，关闭请刷新当前页", "success");
}
