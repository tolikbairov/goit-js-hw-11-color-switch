const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('[data-action="start"]');

const stopBtn = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
stopBtn.disabled = "true";
let functionId = null;
startBtn.addEventListener("click", () => {
  startBtn.disabled = "true";
  stopBtn.removeAttribute("disabled");
  functionId = setInterval(() => {
    changeColor();
  }, 1000);
});
stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute("disabled");
  stopBtn.disabled = "true";
  clearInterval(functionId);
});
const changeColor = () => {
  body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
};
