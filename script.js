function updateTime() {
  const apiUrl = 'http://worldtimeapi.org/api/timezone/America/Los_Angeles';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const startDate = new Date('December 11, 2022 00:00:00');
      const currentDateUnix = data.unixtime;
      const timeDiff = (currentDateUnix * 1000) - startDate.getTime();
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
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
}

window.onload = updateTime;
