require("../../scss/modal/timer.scss");

const MS_IN_SEC = 1000;
const TIMER_TIMEOUT = 6 * 24 * 60 * 60 * MS_IN_SEC;
let date = TIMER_TIMEOUT;
function timer() {
  date = date - MS_IN_SEC;
  let days = Math.floor(date / 1000 / 60 / 60 / 24);
  let hours = Math.floor(date / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(date / 1000 / 60) % 60;
  let seconds = Math.floor(date / 1000) % 60;

  if (!date) {
    clearInterval(start);
    setTimeout(() => {
      date = TIMER_TIMEOUT;
      start = setInterval(timer, 1000);
    }, 3000);
  }
  document.getElementById("d").innerText = days;
  document.getElementById("h").innerText = hours;
  document.getElementById("m").innerText = minutes;
  document.getElementById("s").innerText = seconds;
}
timer();
let start = setInterval(timer, 1000);
module.exports = timer;
