function updateTime() {
  let startDate = new Date('December 11, 2022 00:00:00');
  let currentDate = new Date();
  let timeDiff = currentDate.getTime() - startDate.getTime();
  let seconds = Math.floor(timeDiff / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  setTimeout(updateTime, 1000);
}

window.onload = updateTime;
