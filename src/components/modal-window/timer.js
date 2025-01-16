require("../../scss/modal/timer.scss");

const intervalDays = 5; // Период сброса в днях
const intervalMilliseconds = intervalDays * 24 * 60 * 60 * 1000;

// Функция для получения или установки конечной даты
function getOrSetEndDate() {
  const savedEndDate = localStorage.getItem("endDate"); // Получаем дату из localStorage
  if (savedEndDate) {
    return new Date(savedEndDate); // Если дата есть, возвращаем её
  } else {
    const newEndDate = new Date(Date.now() + intervalMilliseconds); // Устанавливаем новую дату
    localStorage.setItem("endDate", newEndDate); // Сохраняем её в localStorage
    return newEndDate;
  }
}

let endDate = getOrSetEndDate(); // Получаем конечную дату

function timer() {
  const now = new Date();
  let gap = endDate - now;

  // Если таймер истек, обновляем конечную дату
  if (gap <= 0) {
    endDate = new Date(Date.now() + intervalMilliseconds); // Устанавливаем новую дату
    localStorage.setItem("endDate", endDate); // Сохраняем её в localStorage
    gap = endDate - now; // Пересчитываем оставшееся время
  }

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  // Обновляем элементы на странице
  document.getElementById("d").innerText = days;
  document.getElementById("h").innerText = hours;
  document.getElementById("m").innerText = minutes;
  document.getElementById("s").innerText = seconds;
}

// Запускаем таймер
timer();
setInterval(timer, 1000);


module.exports = timer;
