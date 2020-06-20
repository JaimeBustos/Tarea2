let a = 50;
let b = 200;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  a = a+.5;
  b = b-.5;
  background(220);
  fill (200, 200, 200);
  circle(a, a, 50);
  circle(b, a, 50);
  circle(a, b, 50);
  circle(b, b, 50);
  if(a == b){
    noLoop() }
}
