let stars = [];
let starCount = 1200;

function setup() {

  createCanvas(800, 600);

  for (let i = 0; i < starCount; i++) {
    stars.push(new Star());
  }

}
function draw() {

  background(5,5,20);

  for (let s of stars) {
    s.update();
    s.display();
  }

}