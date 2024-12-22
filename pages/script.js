const rotatingContainer = document.querySelector('.rotating-container');
const rotatingText = document.getElementById('rotatingText');

let angle = 1; // Отслеживаем угол вручную
const rotationSpeed = 1; // скорость вращения

function updateTextRotation() {
  // angle = (angle + rotationSpeed) % 360; // Обновляем угол (0 - 360)
  // rotatingContainer.style.transform = `rotateY(${angle}deg)`; // Вращаем контейнер

  // // Корректируем поворот текста
  //   if (angle >= 180) {
  //       angle = 0;
  //   } 
  //   else {
  //       rotatingText.style.transform = 'rotateY(180deg)';
  //   }
  angle = angle >= 180 
        ? 0
        : (angle + rotationSpeed); // Обновляем угол (0 - 360)

  rotatingContainer.style.transform = angle == 0 
        ? `rotateY(180deg)`
        : `rotateY(${angle}deg)`; // Вращаем контейнер

  requestAnimationFrame(updateTextRotation);
}
updateTextRotation();


// CALENDAR

function updateDateTime() {
  const dateDisplay = document.getElementById('dateDisplay');
  const now = new Date();
  const optionsDate = {  day: 'numeric', month: 'short' };
  const formattedDate = now.toLocaleDateString('en-GB', optionsDate);
  dateDisplay.textContent = formattedDate;
}
setInterval(updateDateTime, 1000);
updateDateTime();