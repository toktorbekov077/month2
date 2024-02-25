document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');

    toggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const container = toggle.parentNode;
            container.classList.toggle('show-answer');
            if (container.classList.contains('show-answer')) {
                toggle.textContent = 'Скрыть ответ';
            } else {
                toggle.textContent = 'Показать ответ';
            }
        });
    });
});