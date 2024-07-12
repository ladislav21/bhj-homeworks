let killed = document.getElementById('dead');
let missed = document.getElementById('lost');
let holeArr = [];

function checkHole(hole) {
    if (hole.className.includes('hole_has-mole')) {
        killed.textContent === '9' ? restartGame('Вы победили!') : killed.textContent = parseInt(killed.textContent) + 1;
    } else {
        missed.textContent === '4' ? restartGame('Вы проиграли!') : missed.textContent = parseInt(missed.textContent) + 1;
    }
}

function restartGame(text) {
    killed.textContent = '0';
    missed.textContent = '0';
    alert(text);
}

for(let index = 1; index < 10; index++) {
    holeArr[index] = document.getElementById(`hole${index}`);
};

holeArr.forEach((holeIndex) => {
    holeIndex.addEventListener('click', function() {
        checkHole(holeIndex);
    });
});