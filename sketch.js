function setup() {
  createCanvas(800, 650);
}

function draw() {
	background(230, 230, 250);
	fill(152, 251, 152);
	triangle(300, 100, 400, 50, 300, 100);
	textSize(54);
	textFont('Georgia');
	fill(105, 105, 105);
	text('I hope you have a great day!', 400, 400)
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}