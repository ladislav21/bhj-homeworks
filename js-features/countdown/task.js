let result = document.getElementById('timer');

let newTimer = new Date();

let time = {
    hours: 0,
    minutes: 0,
    seconds: parseInt(result.textContent),
};

function setNewTime(timerHours, timerMinutes, timerSeconds) {
    newTimer.setHours(timerHours, timerMinutes, timerSeconds);
    result.textContent = newTimer.toLocaleTimeString("ru-Ru", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
};

setNewTime(time.hours, time.minutes, time.seconds);

let intervalID = setInterval(() => {
    time.seconds -= 1;
    setNewTime(time.hours, time.minutes, time.seconds);
    if(time.seconds === 0) {
        clearInterval(intervalID);
        setTimeout(() => alert('Вы выиграли в конкурсе!'));
    }
}, 1000);