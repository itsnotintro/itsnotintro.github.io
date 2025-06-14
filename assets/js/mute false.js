const audio = document.getElementById("typing");

document.getElementById("play").addEventListener("click", function () {
  audio.muted = false;
  audio.play();