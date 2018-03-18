var NUMSINES;// = hour(); // how many of these things can we do at once? use hour to determine numsines
var sines;// = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable

// play with these to get a sense of what's going on:
var fund = 0.005; // the speed of the central sine
var ratio = 1; // what multiplier for speed is each additional sine?
var alpha = 50; // how opaque is the tracing system

var trace = false; // are we tracing?

function setup() {
  createCanvas(windowWidth, windowHeight);
  NUMSINES = hour()
  sines = new Array(NUMSINES);
  var m = minute();
  rad = map(m, 0, 59, height/8, height/3); // maps minutes to radius of internal circle

  //rad = height/4; // compute radius for central circle
  background(100); // clear the screen

  for (var i = 0; i<sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function draw() {
  if (!trace) {
    background('pink'); // clear screen if showing geometry
    stroke(100, 100); // black pen
    strokeWeight(6);
    noFill(); // don't fill
  } 

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (var i = 0; i<sines.length; i++) {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      stroke(0, 0, 255*(float(i)/sines.length), alpha); // blue
      fill(0, 0, 255, alpha/2); // also, um, blue
      erad = 5.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    }
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    if (!trace) ellipse(0, 0, radius*2, radius*2); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    if (!trace) ellipse(0, 0, 5, 5); // draw a little circle
    if (trace) ellipse(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation

  push();
  noStroke();
  fill(255, 100);
  rect(10, height-10, 850, -20);

  textAlign(LEFT);
  textSize(20);
  fill(50, 200);
  text("minutes are mapped to the radius of the initial circle. hours are mapped to the number of sines.", 
    10, height-10);
  pop();
  
}

function keyReleased() {
  if (key==' ') {
    trace = !trace; 
    background(255);
  }
}
