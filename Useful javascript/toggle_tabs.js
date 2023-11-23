function initToggleTabs() {
  const btnToggleArr = Array.from(document.querySelectorAll(('.js-tabs__tab')));
  btnToggleArr.forEach(btn => {
     btn.addEventListener('click', function() {
        const tabIndex = btn.dataset.tab;
        const parent = btn.closest('.js-tabs');
        parent.querySelector('.js-tabs__tab--active').classList.remove('js-tabs__tab--active');
        btn.classList.add('js-tabs__tab--active');
        
        parent.querySelector('.js-tabs__tabContent--active').classList.remove('js-tabs__tabContent--active');
        parent.querySelector(`.js-tabs__tabContent--${tabIndex}`).classList.add('js-tabs__tabContent--active');
     })
  })
}