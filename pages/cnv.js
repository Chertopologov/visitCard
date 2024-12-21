const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const text = "Hello World";
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
let angle = 0;
const rotationSpeed = 0.02; // Скорость вращения

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Очистка канваса

  ctx.save(); // Сохраняем текущее состояние канваса
  ctx.translate(centerX, centerY); // Перемещаем начало координат в центр
  ctx.rotate(angle); // Поворачиваем канвас
  ctx.translate(-centerX, -centerY); // Возвращаем начало координат на место

  ctx.font = '30px Arial';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(text, centerX, centerY + 10); // + 10 чтобы текст был ровно по середине

  ctx.restore(); // Восстанавливаем сохранённое состояние канваса

  angle += rotationSpeed; // Обновляем угол вращения
  requestAnimationFrame(draw); // Вызываем функцию draw снова
}

draw();