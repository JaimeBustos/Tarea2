let b = 400;
let c = 0;
function setup() {
}
  

function draw() {
  createCanvas(400, 400);
  background(0);

  stroke(255);
  b = b-.5;
  c = c+.5;
  line(200, c, 200, 200);
  line(c, b, 200, 200);
  line(b, b, 200, 200);
  if (b < 200){
    noLoop()
  }

}
