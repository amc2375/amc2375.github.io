var table;
var grade = [], year = [], gender = [], percents = [];
var thisyear = 2007; //determines which year to pull data from, between 2006 and 2011
var girls3, girls4, girls5, girls6, girls7, girls8;
var boys3, boys4, boys5, boys6, boys7, boys8;

function preload() {
	table = loadTable('schooldata.csv', 'csv', 'header')

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);

	// drawing grid
	stroke(30);
	line(0, height/2, width, height/2);
	line(width/3, 0, width/3, height);
	line(2*width/3, 0, 2*width/3, height);
	
	piecharts();
}

function piecharts() {
	extractData();
	noStroke();

	// third grade box
	push();
	fill(100, 20);
	translate(width/6, height/4);
	ellipse(0, 0, height/2 - 10, height/2 - 10);
	fill(255, 0 , 0, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+girls3*TWO_PI);
	fill(0, 0, 255, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+boys3*TWO_PI);
	fill(0, 150);
	textSize(50);
	textAlign(CENTER);
	text('grade 3', 0, 0);
	pop();

	// fourth grade box
	translate(width/3, 0);
	push();
	fill(100, 20);
	translate(width/6, height/4);
	ellipse(0, 0, height/2 - 10, height/2 - 10);
	fill(255, 0 , 0, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+girls4*TWO_PI);
	fill(0, 0, 255, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+boys4*TWO_PI);
	fill(0, 150);
	textSize(50);
	textAlign(CENTER);
	text('grade 4', 0, 0);
	pop();

	// fifth grade box
	translate(width/3, 0);
	push();
	fill(100, 20);
	translate(width/6, height/4);
	ellipse(0, 0, height/2 - 10, height/2 - 10);
	fill(255, 0 , 0, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+girls5*TWO_PI);
	fill(0, 0, 255, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+boys5*TWO_PI);
	fill(0, 150);
	textSize(50);
	textAlign(CENTER);
	text('grade 5', 0, 0);
	pop();

	// sixth grade box
	translate(-2*width/3, height/2);
	push();
	fill(100, 20);
	translate(width/6, height/4);
	ellipse(0, 0, height/2 - 10, height/2 - 10);
	fill(255, 0 , 0, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+girls6*TWO_PI);
	fill(0, 0, 255, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+boys6*TWO_PI);
	fill(0, 150);
	textSize(50);
	textAlign(CENTER);
	text('grade 6', 0, 0);
	pop();

	// seventh grade box
	translate(width/3, 0);
	push();
	fill(100, 20);
	translate(width/6, height/4);
	ellipse(0, 0, height/2 - 10, height/2 - 10);
	fill(255, 0 , 0, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+girls7*TWO_PI);
	fill(0, 0, 255, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+boys7*TWO_PI);
	fill(0, 150);
	textSize(50);
	textAlign(CENTER);
	text('grade 7', 0, 0);
	pop();

	// eighth grade box
	translate(width/3, 0);
	push();
	fill(100, 20);
	translate(width/6, height/4);
	ellipse(0, 0, height/2 - 10, height/2 - 10);
	fill(255, 0 , 0, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+girls8*TWO_PI);
	fill(0, 0, 255, 80);
	arc(0, 0, height/2 - 10, height/2 - 10, -1*HALF_PI, -1*HALF_PI+boys8*TWO_PI);
	fill(0, 150);
	textSize(50);
	textAlign(CENTER);
	text('grade 8', 0, 0);
	pop();

}

function extractData () {
	grade = table.getColumn('Grade');
	year = table.getColumn('Year');
	gender = table.getColumn('Category');
	percents = table.getColumn('Level 3+4 %');

	for (i = 0; i < grade.length; i++) {
		if(year[i] == thisyear) {
			if (grade[i] == 3) {
				if (gender[i] == "Female") {
					girls3 = percents[i];
				}
				else if (gender[i] == "Male") {
					boys3 = percents[i];
				}	
			}  
			else if (grade[i] == 4) {
				if (gender[i] == "Female") {
					girls4 = percents[i];
				}
				else if (gender[i] == "Male") {
					boys4 = percents[i];
				}
			} 
			else if (grade[i] == 5) {
				if (gender[i] == "Female") {
					girls5 = percents[i];
				}
				else if (gender[i] == "Male") {
					boys5 = percents[i];
				}
			}
			else if (grade[i] == 6) {
				if (gender[i] == "Female") {
					girls6 = percents[i];
				}
				else if (gender[i] == "Male") {
					boys6 = percents[i];
				}
			}
			else if (grade[i] == 7) {
				if (gender[i] == "Female") {
					girls7 = percents[i];
				}
				else if (gender[i] == "Male") {
					boys7 = percents[i];
				}
			}
			else if (grade[i] == 8) {
				if (gender[i] == "Female") {
					girls8 = percents[i];
				}
				else if (gender[i] == "Male") {
					boys8 = percents[i];
				}
			}
		}
	}
}
