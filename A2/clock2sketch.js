var xs=[], ys=[];
var xm=[], ym=[];
var xh=[];
var a = 0;
var b = 0;

function setup() {
  createCanvas(1400, 740);
  //noStroke();
  for (var i = 0; i < 60; i++) {
  	a = a + width/60;
  	append(xs, a);
  }
  for (var i = 0; i < 60; i++) {
  	b = b + height/60;
  	append(ys, b);
  }
  /*
  for (var i = 0; i < width; i=i+(width/60)) {
  	append(xm, i);
  }
  for (var i = height; i > 0; i=i-(height/60)) {
  	append(ym, i);
  }
  for (var i = 0; i < width; i=i+(width/24)) {
  	append(xh, i);
  } */
 }


 function draw () {
  var h = hour();
  var m = minute();
  var s = second();

 	background(255);
 	stroke(50);
  strokeWeight(6);
 	//second lines
 	for (i = 0; i < s; i++) {
 		line(xs[i], 0, 0, y[s]);
 	}
  /*
 	//minute lines
 	for(i=0; i<m; i++) {
 		line(0, ym[i], xm[i], height);
 	}
 	//hour lines
 	for(i=0; i<h; i++) {
 		line(xh[i], 0, xh[i], height);
 	}*/

 }


