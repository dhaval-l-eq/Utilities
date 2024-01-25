
// this function will add visible class to target element after we scroll past the watch element.
function showOnScroll() {
    const watchElement = document.querySelector('.product-single__meta .atc-row');
    const targetEl = document.querySelector('.atc-sticky');
    elementClassToggle();
    window.addEventListener('scroll', function () {
        elementClassToggle();
    });

    function elementClassToggle() {
        if (watchElement) {
            if (isElementAboveViewport(watchElement)) {
                targetEl.classList.remove('visible');
            } else {
                targetEl.classList.add('visible');
            }
        }
    }

    function isElementAboveViewport(element) {
        var rect = element.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0);
    }
}