const allTabs = document.querySelectorAll('.tabs');

allTabs.forEach(currentTab => {
    const tabsName = currentTab.querySelectorAll('.tab');
    const tabsContent = currentTab.querySelectorAll('.tab__content');

    tabsName.forEach((tabName, newActiveIndex) => {
        tabName.onclick = function() {
            let activeIndex = 0;

            tabsName.forEach((tab, updActiveIndex) => {
                if (tab.className.includes('tab_active')) {
                    activeIndex = updActiveIndex;
                }
            });
    
            tabsName[activeIndex].classList.remove('tab_active');
            tabsContent[activeIndex].classList.remove('tab__content_active');
    
            tabsName[newActiveIndex].classList.add('tab_active');
            tabsContent[newActiveIndex].classList.add('tab__content_active');
        };
    });
})