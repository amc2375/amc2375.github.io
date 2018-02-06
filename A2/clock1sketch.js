var xs=[], ys=[];
var x1=[], y1=[];
var x2=[], y2=[];

function setup() {
  createCanvas(1400, 740);
  noStroke();
  for (var i = 0; i <60; i++) {
  	append(xs, random(width));
  	append(ys, random(height));
  }
   for (var i = 0; i <200; i++) {
  	append(x1, random(width));
  	append(y1, random(height));
  }
  for (var i = 0; i<200; i++) {
  	append(x2, random(width));
  	append(y2, random(height));
  }
}


function draw() {
	var h = hour();
	var m = minute();
	var s = second();
	// to make hours in 12 not 24, while accounting for 12 am and 12 pm
	if(h = 12) {
		h = hour();
	}
	else if (h = 0) {
		h = hour();
	}
	else {
		h = ((hour())%12);
	}
	//using background color to represent minutes
	//attempting to map the g to decrease slowly, and the blue to decrease more quickly to
	//create a range of blues
	background(0, map(m, 0, 59, 60, 10), map(m, 0, 59, 255, 40));

	//adding some tiny white and pink dots to make it look like space!
	push();
	for (var i = 0; i < 200; i++) {
		fill(255);
		ellipse(x1[i], y1[i], 1, 1);
	}
	pop();
	push();
	for (var i = 0; i < 200; i++) {
		fill('lightpink');
		ellipse(x2[i], y2[i], 1, 1);
	}
	pop();

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
	textFont('Helvetica')
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
