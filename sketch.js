function setup() {
  createCanvas(640, 480);
}

function draw() {
	background(230, 230, 250);
	fill(255, 240, 245);
	triangle(24, 15, 35, 50, 75, 15);
	textSize(36);
	textFont('Georgia');
	fill(105, 105, 105);
	text('I hope you have a great day!', 50, 15)
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}