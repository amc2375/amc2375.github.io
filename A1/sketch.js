function setup() {
  createCanvas(1440, 800);
  noStroke()
}

//188 was the G value for background; map(second(), 0, 59, 0, 255)
// text size: map(minute(), 0, 59, 12, 100)
function draw() {
	background(143, map(second(), 0, 59, 0, 255), 143);
	fill(152, 251, 152);
	push();
		rotate(map(hour(), 0, 23, 0, 2*PI))
		triangle(45, 45, 45, 360, 200, 360);
	pop();
	arc(479, 300, 280, 280, PI, TWO_PI)
	textSize(map(minute(), 0, 59, 12, 100));
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