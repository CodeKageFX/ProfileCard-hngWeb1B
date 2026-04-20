
document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('utc-time');

    function updateUTCTime() {
        timeElement.textContent = Date.now();
    }

    updateUTCTime();

    setInterval(updateUTCTime, 10);

    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.animation = `fadeUp 0.6s ease forwards ${0.5 + (index * 0.1)}s`;
    });
});
