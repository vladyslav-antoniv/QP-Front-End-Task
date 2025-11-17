/* --- src/scripts/main.js --- */

document.addEventListener('DOMContentLoaded', () => {

    // === Логіка Мобільного Меню (Бургер) ===
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
            // Перемикаємо клас 'is-open' на кнопці та меню
            burgerBtn.classList.toggle('is-open');
            mobileMenu.classList.toggle('is-open');
        });
    }

    // === Логіка FAQ (Акордеон) ===
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (question) {
            question.addEventListener('click', () => {
                // Перевіряємо, чи цей елемент вже відкритий
                const isOpen = item.classList.contains('is-open');

                // Спочатку закриваємо ВСІ елементи
                faqItems.forEach(i => {
                    i.classList.remove('is-open');
                });

                // Якщо елемент НЕ був відкритий, відкриваємо його
                if (!isOpen) {
                    item.classList.add('is-open');
                }
            });
        }
    });

});