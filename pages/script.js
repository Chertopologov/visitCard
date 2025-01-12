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

// BACKGROUND

document.addEventListener('DOMContentLoaded', function() {
  const space = document.querySelector('.space');
  const numberOfParticles = 200;

  const symbols = ['0', '1', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '{', '}', '[', ']','<', '>', '/', '|', '\\'];

  for (let i = 0; i < numberOfParticles; i++) {
      createParticle();
  }
  function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
       particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      
       const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
       particle.style.left = `${initialX}vw`;
      particle.style.top = `${initialY}vh`;
      
      const size = Math.random() * 2 + 1.2;
      particle.style.fontSize = `${size * 8}px`;
      
      const animationDelay = Math.random() * 10;
       particle.style.animationDelay = `${animationDelay}s`;
      
       const duration = Math.random() * 10 + 5;
     particle.style.animationDuration = `${duration}s`;
      
     const speedX = (Math.random() - 0.5) * 10;
      const speedY = (Math.random() - 0.5) * 10;
      particle.style.transform = `translate(${Math.random() * 10}px, ${Math.random() * 10}px)`
      space.appendChild(particle);
       particle.animate([
          { transform: `translate(${initialX + speedX * duration}vw, ${initialY + speedY * duration}vh) scale(1)`, opacity: 1 },
           {transform: `translate(${initialX + (Math.random() * 20)}vw, ${initialY + (Math.random() * 20)}vh) scale(0.5)`, opacity: 0.6}
         ], {
             duration: duration * 1000,
             iterations: Infinity,
              easing: 'linear'
          });
  }
});



// RUNNING-LINE

// document.addEventListener('DOMContentLoaded', function() {
//   const loopContainer = document.querySelector('.loop-container');
//   const loopWrapper = document.querySelector('.loop-wrapper');
//   const loopElement = document.querySelector('.loop-element');
//   const loopTextFirst = document.querySelector('.loop-text--first');
//   const loopTextSecond = document.querySelector('.loop-text--second');

//   if (!loopContainer || !loopWrapper || !loopElement || !loopTextFirst || !loopTextSecond) return;

//   const loopElementWidth = loopElement.offsetWidth;
//   const loopWrapperWidth = loopWrapper.offsetWidth;


//   if (loopElementWidth <= loopWrapperWidth) {
//       loopElement.style.animationPlayState = 'paused';
//       return;
//   }

//  loopTextSecond.style.transform = `translateX(${loopElementWidth}px)`;
//  let currentPosition = 0
//    const checkScroll = () => {


//        currentPosition -= loopElementWidth/1000; // Сдвиг влево

//          if(currentPosition < -loopElementWidth){
//              currentPosition = 0;
//         }

//          loopTextSecond.style.transform = `translateX(${loopElementWidth + currentPosition}px)`;

//        requestAnimationFrame(checkScroll);

//       };

//   checkScroll();

// });