const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        const intervalId = setInterval(() => {
            const hour = Math.floor(seconds / 3600);
            const minutes = Math.floor(
                  hour > 0 ? (seconds - hour * 3600) / 60 : seconds / 60
                  );
            const sec = seconds - (hour * 3600 + minutes * 60);
    
            timerEl.innerHTML = `${hour} hours :
            ${minutes} minutes :
            ${sec} seconds `;
    
            seconds -= 1;
            if (seconds < 0 || buttonEl.textContent === 'Start') {
                timerEl.innerHTML = "hh:mm:ss";
                clearInterval(intervalId);
            }
        }, 1000);
    };
};

const updateBtn = () => {
    if (buttonEl.textContent === "Start") {
        buttonEl.textContent = "Stop";
        inputEl.value = "Timer is runnig";
    } else {
        buttonEl.textContent = "Start";
        inputEl.value = "Enter the number of seconds";
    }
} 

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^0-9\.]/g, "");
});

buttonEl.addEventListener('click', () => {
  if (inputEl.value === '' && buttonEl.textContent === "Start") {
   alert("Введите количество секунд");
  }
  else if (buttonEl.textContent === "Stop") {
    animateTimer(-1);
    updateBtn();
    timerEl.innerHTML = 'hh:mm:ss';
  }
  else {
    const seconds = Number(inputEl.value);
    animateTimer(seconds);
    updateBtn();
    inputEl.value = '';
  } 
});



