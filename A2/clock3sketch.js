var xs=[], ys=[];

function setup() {
  createCanvas(1400, 740);
  noStroke();
  for (var i = 0; i < 60; i++) {
  	append(xs, random(601, 799));
  	append(ys, random(271, 469));
  }
}

function draw() {
	background(180);
	var h = hour();
	var m = minute();
	var s = second();
	// to make hours in 12 not 24, while accounting for 12 am and 12 pm
	if(h = 12) {
		h = 12;
	}
	else if (h = 0) {
		h = 12;
	}
	else {
		h = hour()%12;
	}
	// petals added by hour
	//petals get longer every minute
	push();
	fill(255, 0, 120);
	translate(700, 370);
	for (var i = 0; i < h; i++) {
		arc(0, 30, 110, map(m, 0, 59, 400, 700), PI, TWO_PI);
		rotate(PI/6);
	}
	pop();
	//center circle of the flower
	/*push();
	fill(200);
	ellipse(700, 370, 280, 280);
	pop();*/

	push();
	fill(255, 0, 120);
	ellipse(700, 370, 280, 280);
	pop();

	//add poppy seeds by second
	push();
		fill(0);
		for (var i = 0; i < s; i++) {
			drawSeed(xs[i], ys[i], 8, 8);
		}
	pop();

	//textbox with time
	push();
	fill(255);
	textSize(120);
	textFont('Helvetica');
	text(h + ':' + m + ':' + s, 20, 700)
	pop();

}

function drawSeed (x, y, rad1, rad2) {
	fill (0);
	ellipse(x, y, rad1, rad2);
}


