function setup() {
  createCanvas(500,480);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  drawBackground();
  drawSol();
  drawMar();
  drawArena();
}

function drawBackground() {
  background(255, 180, 200);
  noStroke();
  for (let y = 0; y < height; y += 40) {
    fill(255, 100 + y % 255, 150, 90);
    beginShape();
    for (let x = 0; x < width; x += 40) {
      let wave = sin((x + y) * 0.1) * 10;
      vertex(x, y + wave);
    }
    endShape(CLOSE);
  }
}

function drawSol() {
  let sunX = width / 2 + 100;
  let sunY = 320;
  let radius = 60;

  push();
  stroke(255, 80, 0);
  strokeWeight(2);
  for (let i = 0; i < 360; i += 10) {
    let x1 = sunX + cos(i) * radius;
    let y1 = sunY + sin(i) * radius;
    let x2 = sunX + cos(i) * (radius + 20);
    let y2 = sunY + sin(i) * (radius + 20);
    line(x1, y1, x2, y2);
  }
  pop();

  fill(255, 220, 0);
  noStroke();
  ellipse(sunX, sunY, radius * 2, radius * 2);

  fill(0);
  ellipse(sunX - 15, sunY - 10, 5, 5);
  ellipse(sunX + 15, sunY - 10, 5, 5);
  noFill();
  stroke(0);
  strokeWeight(2);
  arc(sunX, sunY + 5, 30, 15, 0, 180);
}

function drawMar() {
  noStroke();
  fill(150, 200, 255);
  rect(0, 350, width, 100);
}

function drawArena() {
  noStroke();
  for (let y = 450; y < height; y += 10) {
    for (let x = 0; x < width; x += 10) {
      let r = random(200, 255);
      let g = random(150, 180);
      let b = random(50, 80);
      fill(r, g, b);
      rect(x, y, 10, 10);
    }
  }
}
