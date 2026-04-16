
document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('utc-time');

    function updateUTCTime() {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        
        timeElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
    }

    updateUTCTime();

    setInterval(updateUTCTime, 1000);

    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach((btn, index) => {
        btn.style.opacity = '0';
        btn.style.animation = `fadeUp 0.6s ease forwards ${0.5 + (index * 0.1)}s`;
    });
});
