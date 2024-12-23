const rotatingText = document.getElementById('rotatingText');
const rotatingContainer = document.querySelector('.rotating-container');

let angle = 0;
const rotationSpeed = 2;
let textRotation = 0;


function updateTextRotation() {
    let deltaTime = 1/60;

    angle = angle + rotationSpeed * deltaTime; //  угол контейнера

     rotatingContainer.style.transform = `rotateY(${angle % 360}deg)`;  // вращаем контейнер

    // Корректируем поворот текста
      if (angle % 360 > 90 && angle % 360 < 270) {
         textRotation = (angle + 180);
      }else{
         textRotation = angle;
       }


    rotatingText.style.transform = `rotateY(${textRotation}deg)`;  // вращаем текст


    requestAnimationFrame(updateTextRotation);
}

updateTextRotation();


// CALENDAR

function updateDateTime() {
  const dateDisplay = document.getElementById('dateDisplay');
  const now = new Date();
  const optionsDate = {  day: 'numeric', month: 'short' };
  const formattedDate = now.toLocaleDateString('en-GB', optionsDate);
  
  const parts = formattedDate.split(' ');
  
  if (parts.length === 2) {
       parts[1] = parts[1].toLowerCase();
  }

  const lowerCaseMonthDate = parts.join(' ');
  
  dateDisplay.textContent = lowerCaseMonthDate;
}
setInterval(updateDateTime, 1000);
updateDateTime();