require("../../scss/modal/timer.scss");

let date = new Date("Sep 01 2022 00:00:00");

function timer() {
  let now = new Date();
  gap = date - now;

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);
  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  if (gap < 0) {
    days = days + 14;
    hours = hours + 24;
    minutes = minutes + 60;
    seconds = seconds + 60;
  }

  document.getElementById("d").innerText = days;
  document.getElementById("h").innerText = hours;
  document.getElementById("m").innerText = minutes;
  document.getElementById("s").innerText = seconds;
}
timer();
setInterval(timer, 1000);

module.exports = timer;
