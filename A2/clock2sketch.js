var xs=[], ys=[];
var xm=[], ym=[];
var xh=[];


function setup() {
  createCanvas(1400, 740);
  //second arrays
  var a1 = 30;
  var b1 = 710;
  for (var i = 0; i < 60; i++) {
  	a1 = a1 + 1370/60;
  	append(xs, a1);
  }
  for (var i = 0; i < 60; i++) {
  	b1 = b1 - 710/60;
  	append(ys, b1);
  }
  // minute arrays
  var a2 = 10;
  var b2 = 10;
  for (var i = 0; i < 60; i++) {
  	a2 = a2 + 1390/60;
  	append(xm, a2);
  }
  for (var i = 0; i < 60; i++) {
  	b2 = b2 + 730/60;
  	append(ym, b2);
  }
  //hour array
  var a3 = 10;
 
  for (var i = 0; i < 12; i++) {
  	a3 = a3 + 700/12;
  	append(xh, a3);
  } 
 }


 function draw () {
  var h = hour();
  var m = minute();
  var s = second();
  // to make hours in 12 not 24, while accounting for 12 am and 12 pm
	if(h == 12 || h == 0) {
		h = 12;
	}
	else {
		h = h%12;
	}

  background(100);
  stroke(200);
  strokeWeight(4);
  //second lines
  for (var i = 0; i < s; i++) {
 		line(xs[i], 740, 0, ys[i]);
 	}
 	//minute lines
 	for(var i=0; i < m; i++) {
 		line(xm[i], 0, 0, ym[i]);
 	} 
 	//hour lines
 	for(var i = 0; i < h; i++) {
 		line(xh[i], 0, xh[i], 740);
 	}
 	// times in circles
 	push();
 	noStroke();
 	fill(255,127,100);
 	ellipse(1200, 200, 150, 150);
 	ellipse(1200, 360, 150, 150);
 	ellipse(1200, 520, 150, 150);
 	pop();

 	push();
 	noStroke();
 	fill(255);
 	textAlign(CENTER);
 	textFont('Helvetica');
 	textSize(94);
 	text(h, 1200, 235);
 	text(m, 1200, 395);
 	text(s, 1200, 555);
 	pop();



 }


