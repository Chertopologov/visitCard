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

// GRADIENT
document.addEventListener('DOMContentLoaded', () => {
  const scrollBackground = document.createElement('div');
  scrollBackground.classList.add('scroll-background');
  document.body.appendChild(scrollBackground);


  const colors = [
      'linear-gradient(to bottom, #000, #333)',
      'linear-gradient(to bottom, #333, #666)',
      'linear-gradient(to bottom, #666, #999)',
      'linear-gradient(to bottom, #999, #ccc)',
      'linear-gradient(to bottom, #ccc, #fff)',
        'linear-gradient(to bottom, #fff, #ccc)',
      'linear-gradient(to bottom, #ccc, #999)',
      'linear-gradient(to bottom, #999, #666)',
      'linear-gradient(to bottom, #666, #333)'
  ];

// SCROLL TEXT
  let lastScrollTop = 0;
window.addEventListener('scroll', () => {
      let currentScrollTop = window.scrollY || document.documentElement.scrollTop;


    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (currentScrollTop / scrollHeight) * 100; 

      const colorIndex = Math.min(Math.floor((scrollPercentage / 100) * (colors.length -1)) , colors.length -1); 
       scrollBackground.style.backgroundImage = colors[colorIndex];

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    });


});


// SCROLL TEXT
document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('.page-main-content');
  let headerHeight = document.querySelector('.page-header').offsetHeight;


window.addEventListener('scroll', () => {
   let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

   if(currentScrollTop > headerHeight){
     mainContent.classList.add('visible');
     } else{
          mainContent.classList.remove('visible');
     }
  });
}); 


document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('.page-main-content');
  const footer = document.querySelector('.page-footer');
  let headerHeight = document.querySelector('.page-header').offsetHeight;


window.addEventListener('scroll', () => {
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

   if(currentScrollTop > headerHeight){
        mainContent.classList.add('visible');
    } else{
          mainContent.classList.remove('visible');
     }

      const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
      const windowHeight = window.innerHeight;
    const isScrolledToBottom = (currentScrollTop + windowHeight) >= documentHeight;


    if(isScrolledToBottom){
       footer.classList.add('visible');
     } else {
       footer.classList.remove('visible')
      }
  });

});


document.addEventListener('DOMContentLoaded', () => {
  const mainContent = document.querySelector('.page-main-content');
  const header = document.querySelector('.page-header');
  const footer = document.querySelector('.page-footer');

  let headerHeight = header.offsetHeight;


 
    header.classList.add('visible');

  window.addEventListener('scroll', () => {
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;
     if(currentScrollTop > headerHeight){
       mainContent.classList.add('visible');
     } else{
        mainContent.classList.remove('visible');
      }

      const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight);
      const windowHeight = window.innerHeight;
    const isScrolledToBottom = (currentScrollTop + windowHeight) >= documentHeight;


    if(isScrolledToBottom){
       footer.classList.add('visible');
     } else {
       footer.classList.remove('visible')
      }

  });

});