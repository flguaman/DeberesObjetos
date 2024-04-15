const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const car = {
  x: canvas.width / 2,
  y: canvas.height - 50,
  width: 50,
  height: 50,
  speed: 5,
  dx: 0
};

function drawCar() {
  ctx.beginPath();
  ctx.rect(car.x, car.y, car.width, car.height);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();
}

function updateCar() {
  car.x += car.dx;

  if (car.x < 0) {
    car.x = 0;
  } else if (car.x + car.width > canvas.width) {
    car.x = canvas.width - car.width;
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCar();
  updateCar();
  requestAnimationFrame(animate);
}

animate();

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    car.dx = -car.speed;
  } else if (event.code === 'ArrowRight') {
    car.dx = car.speed;
  }
});

document.addEventListener('keyup', () => {
  car.dx = 0;
});
