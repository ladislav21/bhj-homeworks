const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
        const {top, bottom} =  element.getBoundingClientRect();

        if(windowHeight < top || bottom < 0) {
            element.classList.remove('reveal_active');
            return false;
        }

        element.classList.add('reveal_active');
    });
});