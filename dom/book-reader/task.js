const bookConfig = document.getElementById('book');
const fontSizeControl = document.querySelectorAll('.font-size');
const textColors = getColors('book__control_color');
const bgColors = getColors('book__control_background');

let activeFontSize = getActive(fontSizeControl, 'font-size_active');
let activeTextColor = getActive(textColors, 'color_active');
let activeBgColor = getActive(bgColors, 'color_active');

function getActive(arr, activeClass) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].className.includes(activeClass)) {
            return i;
        }
    }
}

function getColors(controlElement) {
    const colorControl = document.querySelector(`.${controlElement}`);
    return colorControl.querySelectorAll('.color');
}

function changeFontSize() {
    fontSizeControl[activeFontSize].classList.toggle('font-size_active');
    let size = fontSizeControl[activeFontSize].getAttribute('data-size');
    if(size) {
        bookConfig.classList.toggle(`font-size_${size}`);
    }
}

function changeTextColor() {
    textColors[activeTextColor].classList.toggle('color_active');
    let color = textColors[activeTextColor].getAttribute('data-text-color');
    bookConfig.classList.toggle(`book_color-${color}`);
}

function changeBgColor() {
    bgColors[activeBgColor].classList.toggle('color_active');
    let color = bgColors[activeBgColor].getAttribute('data-bg-color');
    bookConfig.classList.toggle(`book_bg-${color}`);
}

fontSizeControl.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        changeFontSize();
        activeFontSize = index;
        changeFontSize();
        event.preventDefault();
    })
})

textColors.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        changeTextColor();
        activeTextColor = index;
        changeTextColor();
        event.preventDefault();
    })
})

bgColors.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        changeBgColor();
        activeBgColor = index;
        changeBgColor();
        event.preventDefault();
    })
})