const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (root.style.getPropertyValue('--background-light') === '#f0f0f0') {
        root.style.setProperty('--background-light', '#121212');
        root.style.setProperty('--text-dark', '#fff');
        themeToggle.textContent = '☀️';
    } else {
        root.style.setProperty('--background-light', '#f0f0f0');
        root.style.setProperty('--text-dark', '#000');
        themeToggle.textContent = '🌙';
    }
});
