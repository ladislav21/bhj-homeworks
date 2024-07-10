let result = document.getElementById('timer');

let newInterval = setInterval(() => {
    if(result.textContent !== '1') {
            result.textContent -= 1;
        } else {
            result.textContent -= 1;
            clearInterval(newInterval);
            setTimeout(() => alert('Вы выиграли в конкурсе!'));
        }
    }, 1000);