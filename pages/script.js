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


// GRADIENT
document.addEventListener('scroll', () => {
  const background = document.querySelector('.background-container');

  if (background) { // Добавил проверку на наличие элемента
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      let opacity = scrollY / maxScroll;

      // Ограничение opacity
      if (opacity > 1) {
          opacity = 1;
      } else if (opacity < 0) {
          opacity = 0;
      }

      background.style.setProperty('--opacity', opacity);
  }
});
let lastScrollTop = 0;
const colors = [
  "linear-gradient(to right,rgb(0, 0, 0),rgb(43, 43, 43))",
  "linear-gradient(to right,rgb(43, 43, 43),rgb(59, 59, 59))",
  "linear-gradient(to right,rgb(100, 100, 100),rgb(75, 75, 75))",
  "linear-gradient(to right,rgb(43, 43, 43),rgb(0, 0, 0))"
];
const scrollBackground = document.querySelector('.background-container');





function handleScroll() {
   let currentScrollTop = window.scrollY; // Используем только scrollY
     const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (currentScrollTop / scrollHeight) * 100;

      const colorIndex = Math.min(Math.floor((scrollPercentage / 100) * (colors.length -1)) , colors.length -1); 
    if (scrollBackground){
      scrollBackground.style.backgroundImage = colors[colorIndex];
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
   const headerHeight = document.querySelector('.page-header').offsetHeight;
    const mainContent = document.querySelector('.page-main-content');
    const footer = document.querySelector('.page-footer');
    if (currentScrollTop > headerHeight) {
    if(mainContent){
        mainContent.classList.add('visible');
      }
    } else {
        if(mainContent){
           mainContent.classList.remove('visible');
        }
    }


   const isScrolledToBottom = (currentScrollTop + window.innerHeight) >= document.documentElement.scrollHeight;
   if (isScrolledToBottom) {
       if(footer){
           footer.classList.add('visible');
         }
    } else {
        if(footer){
           footer.classList.remove('visible');
       }
   }
}

document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
  const header = document.querySelector('.page-header');
  if(header){
    header.classList.add('visible');
  }
 window.addEventListener('scroll', handleScroll);
});