function setup() {
	createCanvas(1400, 740);
	noStroke()
}

function draw() {
	background('#eeffc8');
	var s = second();
	var m = minute();
	var h = hour();

	// to make hours in 12 not 24, while accounting for 12 am and 12 pm
	if(h == 12 || h == 0) {
		h = 12;
	}
	else {
		h = h%12;
	}

	push();
	fill('#dcff8c');
	translate(700, 370);
	for (var i = 0; i <= s; i++) {
		triangle(0, 0, 0, -300, 30, -300);
		rotate(PI/30);
	}
	pop();

	push();
	fill('#c9f95f');
	translate(700, 370);
	for (var i = 0; i < m; i++) {
		triangle(0, 0, 0, -200, 20, -200);
		rotate(PI/30);
	}
	pop();

	push();
	fill('#b1fb0b');
	translate(700, 370);
	for (var i = 0; i < h; i++) {
		triangle(0, 0, 0, -100, 50, -88);
		rotate(PI/6);
	}
	pop();

	fill('#b1fb0b');
	textSize(94);
	textFont('Helvetica')
	textAlign(RIGHT);
	text(h + ':' + m + ':' + s, 1370, 700);
}