const color = document.querySelector('input');
let screen = document.querySelector('canvas');

let defaultColor = 'black';
let canDraw = false;
let mouseX = 0;
let mouseY = 0;

let ctx = screen.getContext('2d');

color.onchange = () => defaultColor = color.value;

screen.addEventListener('mousedown', mouseDowmEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);

function mouseDowmEvent(e) {
  canDraw = true;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}

function mouseUpEvent() {
  canDraw = false;
}

function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.moveTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = defaultColor;
  ctx.stroke();

  mouseX = pointX;
  mouseY = pointY;
}

function clearBoard() {
  ctx.setTrasform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.heigth);
}
