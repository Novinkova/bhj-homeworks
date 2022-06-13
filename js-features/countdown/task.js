const timer = document.getElementById('timer');
let timerId;

const countDown = function() { 
  
  if (timer.textContent <= 0) {
    alert('Вы победили в конкурсе!');
    clearInterval(timerId);
  } else timer.textContent -= 1;
};

timerId = setInterval(countDown, 1000);