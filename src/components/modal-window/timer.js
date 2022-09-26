require("../../scss/modal/timer.scss");

let date = new Date("Sep 26 2022 20:08:00");

function timer() {
  let now = new Date();

  let gap = date - now;
  console.log("gap", gap);

  let days = Math.floor(gap / 1000 / 60 / 60 / 24);

  let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(gap / 1000 / 60) % 60;
  let seconds = Math.floor(gap / 1000) % 60;

  //this need for correct start timer when we set date in date variable 
  if (gap < 0) {
    days = days + 7;

    hours = hours + 24;

    minutes = minutes + 60;

    seconds = seconds + 60;
  }

  /* 
  this is necessary so that the 
  timer does not go negative and when 
  this value is reached, the required 
  number of days is added
 */
  if (gap < -1664744400) {
    days = days + 7;

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
