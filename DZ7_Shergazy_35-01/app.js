
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            answer.classList.toggle('hidden');
            if (answer.classList.contains('hidden')) {
                this.textContent = 'Показать ответ';
            } else {
                this.textContent = 'Скрыть ответ';
            }
        });
    });
});