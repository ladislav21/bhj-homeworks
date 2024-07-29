const allRotators = document.querySelectorAll('.rotator');

allRotators.forEach(element => {
    const rotatorText = element.querySelectorAll('.rotator__case');
    let activeTextIndex = 0;

    for(let i = 0; i < rotatorText.length; i++) {
        if(rotatorText[i].className.includes('rotator__case_active')) {
            activeTextIndex = i;
            break;
        }
    }

    setInterval(() => {
        rotatorText[activeTextIndex].classList.remove('rotator__case_active');
        activeTextIndex === rotatorText.length - 1 ? activeTextIndex = 0 : activeTextIndex++;
        rotatorText[activeTextIndex].classList.add('rotator__case_active');
    }, 1000)
})