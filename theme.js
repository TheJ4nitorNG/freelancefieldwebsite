document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    function updateIcon() {
        const isDark = document.documentElement.classList.contains('dark-mode');
        if (themeToggle) {
            themeToggle.innerHTML = isDark ? '☀️' : '🌙';
        }
    }

    // Init icon on load
    updateIcon();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-mode');
            const isDark = document.documentElement.classList.contains('dark-mode');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateIcon();
        });
    }

    // Hamburger Menu Logic
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
            hamburgerBtn.innerHTML = navLinks.classList.contains('show') ? '✕' : '☰';
        });
    }
});