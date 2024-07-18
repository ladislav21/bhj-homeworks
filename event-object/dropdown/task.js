const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const selectItem = document.querySelectorAll('.dropdown__item');

function menuOpenClose() {
    if(dropdownList.className.includes('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active')
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
}

dropdownValue.onclick = menuOpenClose;

selectItem.forEach((element) => {
    element.addEventListener('click', function(event) {
        dropdownValue.textContent = element.textContent;
        menuOpenClose();
        event.preventDefault();
    })
})
