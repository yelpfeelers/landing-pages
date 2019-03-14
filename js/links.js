// "Get Started" On Window Resize

const startBtn = document.querySelector('#header-start');

window.addEventListener('resize', function() {
    if (window.matchMedia('(max-width: 500px)').matches) {
        startBtn.textContent = 'Start!';
        startBtn.style.padding = '1rem';
    } else {
        startBtn.textContent = 'Get Started';
    }
});