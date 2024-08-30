let xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status !== 200) {
            return;
        }

        let pollData = JSON.parse(xhr.response).data;
        pollTitle.innerText = pollData.title;
        let answersArr = pollData.answers;
        
        answersArr.forEach(answer => {
            let answerButton = document.createElement('button');
            answerButton.classList.add('poll__answer');
            answerButton.innerText = answer;
            pollAnswers.appendChild(answerButton);

            answerButton.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!')
            })            
        });
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();