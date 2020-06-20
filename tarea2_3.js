let a = 200;
let b = 100;
let c = 200
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (b < 0){
    noLoop();
  }
  
  a = a-1;
  b = b-.5;
  c = c-.5;
  
  background(220);
  fill (200,200,200);
  rect(100, 100, a, a);
  fill (255, 255, 255);
  arc(c, c, b, b, 0, PI+PI);
  
 
}
