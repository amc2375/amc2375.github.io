
function setup() {
  createCanvas(1440, 800);
  noStroke()
}

function draw() {
	background(143, 188, 143);
	fill(152, 251, 152);
	triangle(45, 45, 45, 360, 200, 360);
	arc(479, 300, 280, 280, PI, TWO_PI)
	textSize(54);
	textFont('Georgia');
	fill(47, 79, 79);
	text('I hope you have a great day!!!', 200, 350)
  if (mouseIsPressed) {
    fill(47, 79, 79);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}