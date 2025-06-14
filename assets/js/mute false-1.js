const audio = document.getElementById("typing");

document.getElementById("play").addEventListener("click", function () {
  audio.muted = false;
  audio.play(); // 재생이 안되고 있을 경우를 대비해 한 번 더 호출 (이미 재생 중이면 아무 일도 안 생깁니다)
});
