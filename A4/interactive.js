var table;
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
	triangle(0, 0, width, 0 , width, height);
	text("BELOW", width/8, 2*height/3);
	pop();

	push();
	stroke(150);
	strokeWeight(10);
	line(0, 0, width, height);
	pop();

	fill(80);
	text("ABOVE", 2*width/3, height/3);
//**************** text to label boros *********************
	// push();
	// fill(120)
	
	// text("}", width/3, 3*height/14-15);
	// text("}", 220+width/3, 5*height/14-15);

	// textSize(20);
	// textStyle(ITALIC);
	// text("Bronx", 30+ width/3, 3*height/14 - 25);
	// text("Brooklyn", 250+width/3, 5*height/14-25);
	// pop();

	console.log(above);

	//***************** drawing bars ******************

	strokeWeight(10);
	textSize(12);
	
	for (var i = 0; i < boro.length; i++) {
		if(year[i] == thisyear) {
		if(boro[i] == "BRONX") {
			if(race[i] == "White") {
				stroke(g);
				line(width*4/28, height*4/28, width*4/28 + 2*above[i], height*4/28);
				stroke(r);
				line(width*4/28, height*4/28, width*4/28 - 2*below[i], height*4/28);
				noStroke();
				text(race[i], 6+width*4/28 + 2*above[i], 4+height*4/28);
			}
			else if(race[i] == "Black") {
				stroke(g);
				line(width*4.5/28, height*4.5/28, width*4.5/28 + 2*above[i], height*4.5/28);
				stroke(r);
				line(width*4.5/28, height*4.5/28, width*4.5/28 - 2*below[i], height*4.5/28);
				noStroke();
				text(race[i], 6+width*4.5/28 + 2*above[i], 4+height*4.5/28);
			}
			else if(race[i] == "Hispanic") {
				stroke(g);
				line(width*5/28, height*5/28, width*5/28 + 2*above[i], height*5/28);
				stroke(r);
				line(width*5/28, height*5/28, width*5/28 - 2*below[i], height*5/28);
				noStroke();
				text(race[i], 6+width*5/28 + 2*above[i], 4+height*5/28);
			}
			else if(race[i] == "Asian") {
				stroke(g);
				line(width*5.5/28, height*5.5/28, width*5.5/28 + 2*above[i], height*5.5/28);
				stroke(r);
				line(width*5.5/28, height*5.5/28, width*5.5/28 - 2*below[i], height*5.5/28);
				noStroke();
				text(race[i], 6+width*5.5/28 + 2*above[i], 4+height*5.5/28);
			}
		}
		else if(boro[i] == "BROOKLYN") {
			if(race[i] == "White") {
				stroke(g);
				line(width*8/28, height*8/28, width*8/28 + 2*above[i], height*8/28);
				stroke(r);
				line(width*8/28, height*8/28, width*8/28 - 2*below[i], height*8/28);
				noStroke();
				text(race[i], 6+width*8/28 + 2*above[i], 5+height*8/28);
			}
			else if(race[i] == "Black") {
				stroke(g);
				line(width*8.5/28, height*8.5/28, width*8.5/28 + 2*above[i], height*8.5/28);
				stroke(r);
				line(width*8.5/28, height*8.5/28, width*8.5/28 - 2*below[i], height*8.5/28);
				noStroke();
				text(race[i], 6+width*8.5/28 + 2*above[i], 5+height*8.5/28);
			}
			else if(race[i] == "Hispanic") {
				stroke(g);
				line(width*9/28, height*9/28, width*9/28 + 2*above[i], height*9/28);
				stroke(r);
				line(width*9/28, height*9/28, width*9/28 - 2*below[i], height*9/28);
				noStroke();
				text(race[i], 6+width*9/28 + 2*above[i], 4+height*9/28);
			}
			else if(race[i] == "Asian") {
				stroke(g);
				line(width*9.5/28, height*9.5/28, width*9.5/28 + 2*above[i], height*9.5/28);
				stroke(r);
				line(width*9.5/28, height*9.5/28, width*9.5/28 - 2*below[i], height*9.5/28);
				noStroke();
				text(race[i], 6+width*9.5/28 + 2*above[i], 4+height*9.5/28);
			}
		}
		else if(boro[i] == "MANHATTAN") {
			if(race[i] == "White") {
				stroke(g);
				line(width*12/28, height*12/28, width*12/28 + 2*above[i], height*12/28);
				stroke(r);
				line(width*12/28, height*12/28, width*12/28 - 2*below[i], height*12/28);
				noStroke();
				text(race[i], 6+width*12/28 + 2*above[i], 5+height*12/28);
			}
			else if(race[i] == "Black") {
				stroke(g);
				line(width*12.5/28, height*12.5/28, width*12.5/28 + 2*above[i], height*12.5/28);
				stroke(r);
				line(width*12.5/28, height*12.5/28, width*12.5/28 - 2*below[i], height*12.5/28);
				noStroke();
				text(race[i], 6+width*12.5/28 + 2*above[i], 5+height*12.5/28);
			}
			else if(race[i] == "Hispanic") {
				stroke(g);
				line(width*13/28, height*13/28, width*13/28 + 2*above[i], height*13/28);
				stroke(r);
				line(width*13/28, height*13/28, width*13/28 - 2*below[i], height*13/28);
				noStroke();
				text(race[i], 6+width*13/28 + 2*above[i], 4+height*13/28);
			}
			else if(race[i] == "Asian") {
				stroke(g);
				line(width*13.5/28, height*13.5/28, width*13.5/28 + 2*above[i], height*13.5/28);
				stroke(r);
				line(width*13.5/28, height*13.5/28, width*13.5/28 - 2*below[i], height*13.5/28);
				noStroke();
				text(race[i], 6+width*13.5/28 + 2*above[i], 4+height*13.5/28);
			}
		}
		else if(boro[i] == "QUEENS") {
			if(race[i] == "White") {
				stroke(g);
				line(width*16/28, height*16/28, width*16/28 + 2*above[i], height*16/28);
				stroke(r);
				line(width*16/28, height*16/28, width*16/28 - 2*below[i], height*16/28);
				noStroke();
				text(race[i], 6+width*16/28 + 2*above[i], 5+height*16/28);
			}
			else if(race[i] == "Black") {
				stroke(g);
				line(width*16.5/28, height*16.5/28, width*16.5/28 + 2*above[i], height*16.5/28);
				stroke(r);
				line(width*16.5/28, height*16.5/28, width*16.5/28 - 2*below[i], height*16.5/28);
				noStroke();
				text(race[i], 6+width*16.5/28 + 2*above[i], 5+height*16.5/28);
			}
			else if(race[i] == "Hispanic") {
				stroke(g);
				line(width*17/28, height*17/28, width*17/28 + 2*above[i], height*17/28);
				stroke(r);
				line(width*17/28, height*17/28, width*17/28 - 2*below[i], height*17/28);
				noStroke();
				text(race[i], 6+width*17/28 + 2*above[i], 4+height*17/28);
			}
			else if(race[i] == "Asian") {
				stroke(g);
				line(width*17.5/28, height*17.5/28, width*17.5/28 + 2*above[i], height*17.5/28);
				stroke(r);
				line(width*17.5/28, height*17.5/28, width*17.5/28 - 2*below[i], height*17.5/28);
				noStroke();
				text(race[i], 6+width*17.5/28 + 2*above[i], 4+height*17.5/28);
			}
		}
		else if(boro[i] == "STATEN ISLAND") {
			if(race[i] == "White") {
				stroke(g);
				line(width*20/28, height*20/28, width*20/28 + 2*above[i], height*20/28);
				stroke(r);
				line(width*20/28, height*20/28, width*20/28 - 2*below[i], height*20/28);
				noStroke();
				text(race[i], 6+width*20/28 + 2*above[i], 5+height*20/28);
			}
			else if(race[i] == "Black") {
				stroke(g);
				line(width*20.5/28, height*20.5/28, width*20.5/28 + 2*above[i], height*20.5/28);
				stroke(r);
				line(width*20.5/28, height*20.5/28, width*20.5/28 - 2*below[i], height*20.5/28);
				noStroke();
				text(race[i], 6+width*20.5/28 + 2*above[i], 5+height*20.5/28);
			}
			else if(race[i] == "Hispanic") {
				stroke(g);
				line(width*21/28, height*21/28, width*21/28 + 2*above[i], height*21/28);
				stroke(r);
				line(width*21/28, height*21/28, width*21/28 - 2*below[i], height*21/28);
				noStroke();
				text(race[i], 6+width*21/28 + 2*above[i], 4+height*21/28);
			}
			else if(race[i] == "Asian") {
				stroke(g);
				line(width*21.5/28, height*21.5/28, width*21.5/28 + 2*above[i], height*21.5/28);
				stroke(r);
				line(width*21.5/28, height*21.5/28, width*21.5/28 - 2*below[i], height*21.5/28);
				noStroke();
				text(race[i], 6+width*21.5/28 + 2*above[i], 4+height*21.5/28);
			}
		}
		
	}		
}
}

function draw() {
 // need to see if it works to declare as object

	//5 boros, with a half space before, between, and after boros: start at width/15, height/15
	//for now, make lines parallel to edges
	//want them to be perpendicular to the line eventually
	
	
			// else if (race[i] == "Black") {
			//  	line()
			// }
		
	
	
	
	
	//line(width/15, height/15, width/15 + )
}



function extractData() {
	boro = table.getColumn('Borough');
	year = table.getColumn('Year');
	race = table.getColumn('Demographic');
	above = table.getColumn('Above %');
	above = int(above);
	below = table.getColumn('Below %');
	below = int(below);

	

}


// still need to: map numbers to bar lengths, generate points along line that are evenly spaced, and draw lines for corresponding 
//grades and years

//interactivity: want to hover over year name and be able to see more details
//click on a year name to have that become the center of the page-- is that possible?