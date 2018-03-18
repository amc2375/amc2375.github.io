var table;
var slider;
var boro = [];
var year = [], race = [], above = [], below = [];
var thisyear = 2011; // decide which year to show data for -- this could be interactive next week
var a3, b3, a4, b4, a5, b5, a6, b6, a7, b7, a8, b8;

var g = 'rgba(185,255,40, 0.8)';
var r = 'rgba(255,99,71, 0.8)';
var data = {}; //trying it as an object

function preload() {
	table = loadTable('schooldata3.csv', 'csv', 'header');
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);
	textStyle(BOLD);
	textSize(70);
	noStroke();

	extractData();

	push();
	fill(200);
	//rect(0, height/2, width, height);
	//triangle(0, 0, width, 0 , width, height);
	fill(80)
	text("BELOW", 2*width/3, 9*height/10);
	pop();

	push();
	stroke(150);
	strokeWeight(10);
	line(0, height/2, width, height/2);
	pop();

	fill(200);
	text("ABOVE", width/12, height/8);
//**************** text to label boros *********************
	translate(30, 0);
	push();
	fill(120)

	textSize(25);
	textStyle(ITALIC);
	text("...the bronx", 90, height/2 - 10);
	text("...brooklyn", width/5 + 65, height/2 - 10);
	text("...manhattan", width*2/5 + 65, height/2 - 10);
	text("...queens", width*3/5 + 65, height/2 - 10);
	text("...staten island", width*4/5 +65, height/2 - 10);
	pop();

	console.log(above);
	slider = createSlider(2006, 2012, 2006);
	text("hello", width/2, height/2);
}

// function draw() {
// 	//***************** drawing bars ******************
// 	fill(255);
// 	textAlign(CENTER);
// 	textStyle(NORMAL);
// 	strokeWeight(15);
// 	textSize(12);
// 	for (var i = 0; i < boro.length; i++) {
// 		if(year[i] == slider.value()) {
// 		if(boro[i] == "BRONX") {
// 			if(race[i] == "White") {
// 				stroke(g);
// 				line(0, height/2, 0, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(0, height/2, 0, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], 0, height/2-3*above[i] - 10);
// 			}
// 			else if(race[i] == "Black") {
// 				stroke(g);
// 				line(25, height/2, 25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(25, height/2, 25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], 25, height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Hispanic") {
// 				stroke(g);
// 				line(50, height/2, 50, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(50, height/2, 50, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], 50, height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Asian") {
// 				stroke(g);
// 				line(75, height/2, 75, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(75, height/2, 75, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], 75, height/2 - 3*above[i] - 10);
// 			}
// 		}
// 		else if(boro[i] == "BROOKLYN") {
// 			if(race[i] == "White") {
// 				stroke(g);
// 				line(width/5-25, height/2, width/5-25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width/5-25, height/2, width/5-25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width/5-25, height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Black") {
// 				stroke(g);
// 				line(width/5, height/2, width/5, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width/5, height/2, width/5, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width/5, height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Hispanic") {
// 				stroke(g);
// 				line(width/5+25, height/2, width/5+25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width/5+25, height/2, width/5+25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width/5+25, height/2 - 3*above[i] - 15);
// 			}
// 			else if(race[i] == "Asian") {
// 				stroke(g);
// 				line(width/5 +50, height/2, width/5 +50, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width/5 +50, height/2, width/5 +50, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width/5+50, height/2 - 3*above[i] - 10);
// 			}
// 		}
// 		else if(boro[i] == "MANHATTAN") {
// 			if(race[i] == "White") {
// 				stroke(g);
// 				line(width*2/5 -25, height/2, width*2/5-25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*2/5-25, height/2, width*2/5-25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*2/5 -25,height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Black") {
// 				stroke(g);
// 				line(width*2/5, height/2, width*2/5, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*2/5, height/2, width*2/5, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*2/5,height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Hispanic") {
// 				stroke(g);
// 				line(width*2/5 + 25, height/2, width*2/5 + 25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*2/5 + 25, height/2, width*2/5 + 25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*2/5 +25,height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Asian") {
// 				stroke(g);
// 				line(width*2/5 + 50, height/2, width*2/5 + 50, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*2/5 + 50, height/2, width*2/5 + 50, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*2/5 +50,height/2 - 3*above[i] - 10);
// 			}
// 		}
// 		else if(boro[i] == "QUEENS") {
// 			if(race[i] == "White") {
// 				stroke(g);
// 				line(width*3/5-25, height/2, width*3/5-25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*3/5-25, height/2, width*3/5-25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*3/5-25,height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Black") {
// 				stroke(g);
// 				line(width*3/5, height/2, width*3/5, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*3/5, height/2, width*3/5, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*3/5,height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Hispanic") {
// 				stroke(g);
// 				line(width*3/5+25, height/2, width*3/5 + 25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*3/5 + 25, height/2, width*3/5 + 25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*3/5+25,height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Asian") {
// 				stroke(g);
// 				line(width*3/5 + 50, height/2, width*3/5 + 50, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*3/5 + 50, height/2, width*3/5 + 50, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*3/5+50,height/2 - 3*above[i] - 10);
// 			}
// 		}
// 		else if(boro[i] == "STATEN ISLAND") {
// 			if(race[i] == "White") {
// 				stroke(g);
// 				line(width*4/5-25, height/2, width*4/5-25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*4/5-25, height/2, width*4/5-25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*4/5-25, height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Black") {
// 				stroke(g);
// 				line(width*4/5, height/2, width*4/5, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*4/5, height/2, width*4/5, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*4/5, height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Hispanic") {
// 				stroke(g);
// 				line(width*4/5 + 25, height/2, width*4/5 + 25, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*4/5 + 25, height/2, width*4/5 + 25, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*4/5+25, height/2 - 3*above[i] - 10);
// 			}
// 			else if(race[i] == "Asian") {
// 				stroke(g);
// 				line(width*4/5 + 50, height/2, width*4/5 + 50, height/2 - 3*above[i]);
// 				stroke(r);
// 				line(width*4/5 + 50, height/2, width*4/5 + 50, height/2 + 3*below[i]);
// 				noStroke();
// 				text(race[i], width*4/5+50, height/2 - 3*above[i] - 10);
// 			}
// 		}
		
// 	}		
// }
// }



function extractData() {
	boro = table.getColumn('Borough');
	year = table.getColumn('Year');
	race = table.getColumn('Demographic');
	above = table.getColumn('Above %');
	above = int(above);
	below = table.getColumn('Below %');
	below = int(below);

}

// function changeYear() {
	
// }


//interactivity: need to create either a slider for the state of the year between 2006 and 2012. the variable can be 'thisyear'
//if a slider doesn't work, use a box where someone enters the year? otherwise just a binary toggle button from 2006 to 2012