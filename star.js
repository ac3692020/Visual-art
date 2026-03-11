class Star {

  constructor() {
    this.angle = random(TWO_PI);
    this.radius = random(20, 300);

    this.speed = random(0.001, 0.01);

    this.size = random(2, 4);

    this.color = color(
      random(150,255),
      random(150,255),
      random(200,255)
    );
  }
update() {

  this.angle += this.speed;

  let x = width/2 + cos(this.angle) * this.radius;
  let y = height/2 + sin(this.angle) * this.radius;

  let d = dist(mouseX, mouseY, x, y);

  if (d < 120) {
    this.radius -= 0.5;
  }

}

  display() {

    let x = width/2 + cos(this.angle) * this.radius;
    let y = height/2 + sin(this.angle) * this.radius;

    noStroke();
    fill(this.color);
    circle(x, y, this.size);
  }
}