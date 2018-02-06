var xs=[], ys=[];

function setup() {
  createCanvas(1400, 740);
  noStroke();
  for (var i = 0; i <60; i++) {
  	append(xs, random(width));
  	append(ys, random(height));
  }
}


function draw() {
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
	//using background color to represent minutes
	//attempting to map the g to decrease slowly, and the blue to decrease more quickly to
	//create a range of blues
	background(0, map(m, 0, 59, 60, 10), map(m, 0, 59, 255, 40));

	//now time to add the stars by second
	push();
	for (var i = 0; i < s; i++) {
		drawStar(xs[i], ys[i], 6, 15, 5);
	}
	pop();

	//using the shape of the moon to represent hours
	//first, adding a silver circle that should stay in the same place the whole time
	push();
	fill(192,192,192);
	ellipse(125, 90, 100, 100);
	pop();

	//now, adding an ellipse that moves to the right with time. color is same as background
	push();
	fill(0, map(m, 0, 59, 60, 10), map(m, 0, 59, 255, 40));
	ellipse(map(h, 0, 23, 130, 225), 90, 100, 120);
	pop();

	//now going to add a textbox with the time
	push();
	fill(50, 150)
	rect(452, 332, 495, 47, 15)
	pop();
	push();
	textSize(40);
	textAlign(CENTER)
	textFont('Arial')
	fill(192,192,192);
	text('the current time is ' + h + ':' + m + ':' + s, 700, 370);
	pop();
}


// function for drawing stars
function drawStar(x, y, rad1, rad2, npoints) {
	fill(255,255,102);
	var angle = TWO_PI/npoints;
	var halfAngle = angle/2.0;
	beginShape();
	for(var a=0; a<TWO_PI; a+=angle) {
		var sx = x + cos(a) * rad2;
		var sy = y + sin(a) * rad2;
		vertex(sx, sy);
		sx = x + cos(a+halfAngle) * rad1;
		sy = y + sin(a+halfAngle) * rad1;
		vertex(sx, sy);
	}
	endShape(CLOSE);
}
