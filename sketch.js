function setup() {
  createCanvas(720, 400);
  noStroke()
}

function draw() {
	background(143, 188, 143);
	fill(152, 251, 152);
	triangle(45, 45, 45, 360, 200, 360);
	textSize(54);
	textFont('Georgia');
	fill(47, 79, 79);
	text('I hope you have a great day!', 200, 400)
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}