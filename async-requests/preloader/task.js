const loadAnimation = document.getElementById('loader');
const valuteList = document.getElementById('items');
let xhr = new XMLHttpRequest();

function fillTable(data) {
    for (element in data) {
        let newElement = document.createElement('div');
        newElement.classList.add('item');
        newElement.innerHTML = `<div class="item__code">${data[element].CharCode}</div><div class="item__value">${data[element].Value}</div><div class="item__currency">руб.</div>`;
        valuteList.appendChild(newElement);
    }   
}

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status !== 200) {
            return;
        }

        loadAnimation.classList.remove('loader_active');
        let valutes = JSON.parse(xhr.responseText).response.Valute;
        fillTable(valutes);
    }    
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();