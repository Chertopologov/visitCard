const rotatingContainer = document.querySelector('.rotating-container');
const rotatingText = document.getElementById('rotatingText');

let angle = 0; // Отслеживаем угол вручную
const rotationSpeed = 1; // скорость вращения

function updateTextRotation() {
  angle = (angle + rotationSpeed) % 360; // Обновляем угол (0 - 360)
  rotatingContainer.style.transform = `rotateY(${angle}deg)`; // Вращаем контейнер

  // Корректируем поворот текста
    if (angle >= 90) {
        rotatingText.style.transform = 'rotateY(180deg)';
    } else {
        rotatingText.style.transform = 'rotateY(0deg)';
    }

  requestAnimationFrame(updateTextRotation);
}
updateTextRotation();