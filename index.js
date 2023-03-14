let input = document.getElementById("input");
const tailHolder = document.getElementById("textEnd");
let checked = document.getElementById("checked");
let audio = document.getElementById("audio");
let isPlaying = false;
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    createEnd(input.value);
    input.value = "";
  }
});

checked.addEventListener("click", (e) => {
  if (!isPlaying) {
    audio.play();
    isPlaying = true;
  } else {
    audio.pause();
    isPlaying = false;
  }
});
function createEnd(text) {
  const endText = document.createElement("div");
  endText.classList.add("gravity");
  endText.innerHTML = text;

  tailHolder.append(endText);
  setTimeout(() => endText.remove(), 2000);
  requestAnimationFrame(() => {
    endText.classList.add("fall-right");
  });
}
