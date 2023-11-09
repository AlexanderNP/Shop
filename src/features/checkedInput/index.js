export function coloringInput() {
    const labels = document.querySelectorAll('.filter__label');
    const container = document.querySelector('.filter');

    // Добавляем класс активности первому лэйблу
    labels[0].classList.add('filter__label-checked');

    container.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter__label')) {
            // Убираем класс активности у всех других лэйблов
            labels.forEach((label) => {
                if (label !== event.target) {
                    label.classList.remove('filter__label-checked');
                }
            });

            // Добавляем класс активности для нажатого лэйбла
            event.target.classList.add('filter__label-checked');
        }
    });
}