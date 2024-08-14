const hasTooltip = document.querySelectorAll('.has-tooltip');
const hiddenTooltip = document.querySelector('.tooltip');
let activeTooltip = null;

hasTooltip.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        
        if((hiddenTooltip.classList.contains('tooltip_active') && (index === activeTooltip))) {
            hiddenTooltip.classList.remove('tooltip_active');
            return;    
        }
        
        activeTooltip = index;
        const {left, bottom} = element.getBoundingClientRect();
        hiddenTooltip.style.left = `${Math.round(left)}px`;
        hiddenTooltip.style.top = `${Math.round(bottom)}px`;
        hiddenTooltip.innerText = element.getAttribute('title');
        hiddenTooltip.classList.add('tooltip_active');
    })
})

window.addEventListener('scroll', () => {
    hiddenTooltip.classList.remove('tooltip_active');
})