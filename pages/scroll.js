let lastScrollTop = 0;
let scrollBackground = null;
let colors = [];

function updateBackground(scrollPercentage) {
    const colorIndex = Math.min(Math.floor((scrollPercentage / 100) * (colors.length - 1)), colors.length - 1);
    if (scrollBackground) {
        scrollBackground.style.setProperty('--opacity', String(scrollPercentage / 100));
    }
}

function handleScroll() {
    let currentScrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (currentScrollTop / scrollHeight) * 100;

    updateBackground(scrollPercentage);
    lastScrollTop = currentScrollTop;

    const header = document.querySelector('.page-header');
    const mainContent = document.querySelector('.page-main-content');
    const footer = document.querySelector('.page-footer');
    const loop = document.querySelector('.loop-container');

    const headerHeight = header ? header.offsetHeight : 0;

    // Header visibility
    if (currentScrollTop > 0) {
        if (header) {
            header.classList.add('visible');
        }
    } else {
        if (header) {
            header.classList.remove('visible');
        }
    }

    // Main content visibility
    if (currentScrollTop > headerHeight) {
        if (mainContent) {
            mainContent.classList.add('visible');
        }
    } else {
        if (mainContent) {
            mainContent.classList.remove('visible');
        }
    }
    // Loop content visibility
    if (currentScrollTop > headerHeight) {
        if (loop) {
            loop.classList.add('visible');
        }
    } else {
        if (loop) {
            loop.classList.remove('visible');
        }
    }

    // Footer visibility (critical change)
    const isAtBottom =
        currentScrollTop + window.innerHeight >= document.documentElement.scrollHeight;
    if (isAtBottom && footer) {
        footer.classList.add('visible');
    } else {
        if (footer) {
            footer.classList.remove('visible');
            footer.style.transition = 'none'; // Отключаем анимацию
            footer.offsetHeight; // Заставляем браузер пересчитать стили
            footer.style.transition = '';// Возвращаем обратно стили анимации

        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    scrollBackground = document.querySelector('.background-container::before');
    colors = [
        'linear-gradient(to bottom, #000, #333)',
        'linear-gradient(to bottom, #333, #666)',
        'linear-gradient(to bottom, #666, #999)',
        'linear-gradient(to bottom, #999, #ccc)',
        'linear-gradient(to bottom, #ccc, #fff)',
        'linear-gradient(to bottom, #fff, #ccc)',
        'linear-gradient(to bottom, #ccc, #999)',
        'linear-gradient(to bottom, #999, #666)',
        'linear-gradient(to bottom, #666, #333)'
    ];

    const header = document.querySelector('.page-header');
    if (header) {
        header.classList.add('visible'); // Important: show header initially
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); // Important: call handleScroll after load
    handleScroll(); // Call handleScroll immediately
});

