// ROTATING TEXT

const rotatingText = document.getElementById('rotatingText');
const rotatingContainer = document.querySelector('.rotating-container');
let angle = 0;
const rotationSpeed = 50;
let textRotation = 0;
function updateTextRotation() {
    let deltaTime = 1/60;
    angle = angle + rotationSpeed * deltaTime;
      if (angle % 360 > 90 && angle % 360 < 270) {
         textRotation = -90;
         angle = -90;
      }else{
         textRotation = angle;
       }
    rotatingText.style.transform = `rotateY(${textRotation}deg)`;
    requestAnimationFrame(updateTextRotation);
}
updateTextRotation();


// CALENDAR

function updateDateTime() {
  const dateDisplay = document.getElementById('dateDisplay');
  if (!dateDisplay) {
      return;
  }
  const now = new Date();
  const options = {
      day: 'numeric',
      month: 'short'
  };
  const formattedDate = now.toLocaleDateString('en-GB', options);

  const parts = formattedDate.split(' ');
  if (parts.length === 2) {
      parts[1] = parts[1].toLowerCase();
  }
   const lowerCaseMonthDate = parts[0] + ' <span class="month">' + parts[1] + '</span>';
  dateDisplay.innerHTML = lowerCaseMonthDate;
}
setInterval(updateDateTime, 1000);
updateDateTime();
