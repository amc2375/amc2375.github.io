var table;
var grade = [], year = [], total = [], above = [], meets = [], below = [];
var thisyear = 2011; // decide which year to show data for -- this could be interactive next week
var a3, m3, b3, a4, m4, b4, a5, m5, b5, a6, m6, b6, a7, m7, b7, a8, m8, b8;

var x3 = [], y3 = [], x4 = [], y4 = [], x5 = [], y5 = [], x6 = [], y6 = [], x7 = [], y7 = [], x8 = [], y8 = [];

function preload() {
	table = loadTable('schooldata2.csv', 'csv', 'header');

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
	extractData();
	noStroke();
	textSize(80);
	

	for (var i = 0; i < a3; i++) {
		fill(173,255,47);
		ellipse(random(80, width/3-80), random(80, height/2-80), 10, 10);
	}
	for (var i = 0; i < m3; i++) {
		fill('yellow');
		ellipse(random(80, width/3-80), random(80, height/2-80), 10, 10);
	}
	for (var i = 0; i < b3; i++) {
		fill('orange');
		ellipse(random(80, width/3-80), random(80, height/2-80), 10, 10);
	}
	fill(255, 200);
	text("3", width/6-40, height/4);

	for (var i = 0; i < a4; i++) {
		fill(173,255,47);
		ellipse(random(width/3+80, 2*width/3-80), random(80, height/2-80), 10, 10);
	}
	for (var i = 0; i < m4; i++) {
		fill('yellow');
		ellipse(random(width/3+80, 2*width/3-80), random(80, height/2-80), 10, 10);
	}
	for (var i = 0; i < b4; i++) {
		fill('orange');
		ellipse(random(width/3+80, 2*width/3-80), random(80, height/2-80), 10, 10);
	}
	fill(255, 200);
	text("4", width/2-40, height/4);

	for (var i = 0; i < a5; i++) {
		fill(173,255,47);
		ellipse(random(2*width/3+80, width-80), random(80, height/2-80), 10, 10);
	}
	for (var i = 0; i < m5; i++) {
		fill('yellow');
		ellipse(random(2*width/3+80, width-80), random(80, height/2-80), 10, 10);
	}
	for (var i = 0; i < b5; i++) {
		fill('orange');
		ellipse(random(2*width/3+80, width-80), random(80, height/2-80), 10, 10);
	}
	fill(255, 200);
	text("5", 5*width/6-40, height/4);

	for (var i = 0; i < a6; i++) {
		fill(173,255,47);
		ellipse(random(80, width/3-80), random(height/2+80, height-80), 10, 10);
	}
	for (var i = 0; i < m6; i++) {
		fill('yellow');
		ellipse(random(80, width/3-80), random(height/2+80, height-80), 10, 10);
	}
	for (var i = 0; i < b6; i++) {
		fill('orange');
		ellipse(random(80, width/3-80), random(height/2+80, height-80), 10, 10);
	}
	fill(255, 200);
	text("6", width/6-40, 3*height/4);

	for (var i = 0; i < a7; i++) {
		fill(173,255,47);
		ellipse(random(width/3+80, 2*width/3-80), random(height/2+80, height-80), 10, 10);
	}
	for (var i = 0; i < m7; i++) {
		fill('yellow');
		ellipse(random(width/3+80, 2*width/3-80), random(height/2+80, height-80), 10, 10);
	}
	for (var i = 0; i < b7; i++) {
		fill('orange');
		ellipse(random(width/3+80, 2*width/3-80), random(height/2+80, height-80), 10, 10);
	}
	fill(255, 200);
	text("7", width/2-40, 3*height/4);

	for (var i = 0; i < a8; i++) {
		fill(173,255,47);
		ellipse(random(2*width/3+80, width-80), random(height/2+80, height-80), 10, 10);
	}
	for (var i = 0; i < m8; i++) {
		fill('yellow');
		ellipse(random(2*width/3+80, width-80), random(height/2+80, height-80), 10, 10);
	}
	for (var i = 0; i < b8; i++) {
		fill('orange');
		ellipse(random(2*width/3+80, width-80), random(height/2+80, height-80), 10, 10);
	}
	fill(255, 200);
	text("8", 5*width/6-40, 3*height/4);

	fill(255, 120);
	textAlign(CENTER);
	textSize(60);
	text("ny state math assesment performance by grade", width/2, height/2 -10);
	text("2011", width/2, height/2 + 50);
}


function extractData() {
	grade = table.getColumn('Grade');
	year = table.getColumn('Year');
	total = table.getColumn('Total Tested');
	above = table.getColumn('Level 3+4 #');
	meets = table.getColumn('Level 2 #');
	below = table.getColumn('Level 1 #');

	for (i = 0; i < grade.length; i++) {
		if (year[i] == thisyear) {
			if (grade[i] == 3) {
				a3 = floor(100*above[i]/total[i]);
				m3 = floor(100*meets[i]/total[i]);
				b3 = floor(100*below[i]/total[i]);
			}
			else if (grade[i] == 4) {
				a4 = floor(100*above[i]/total[i]);
				m4 = floor(100*meets[i]/total[i]);
				b4 = floor(100*below[i]/total[i]);
			}
			else if (grade[i] == 5) {
				a5 = floor(100*above[i]/total[i]);
				m5 = floor(100*meets[i]/total[i]);
				b5 = floor(100*below[i]/total[i]);
			}
			else if (grade[i] == 6) {
				a6 = floor(100*above[i]/total[i]);
				m6 = floor(100*meets[i]/total[i]);
				b6 = floor(100*below[i]/total[i]);
			}
			else if (grade[i] == 7) {
				a7 = floor(100*above[i]/total[i]);
				m7 = floor(100*meets[i]/total[i]);
				b7 = floor(100*below[i]/total[i]);
			}
			else if (grade[i] == 8) {
				a8 = floor(100*above[i]/total[i]);
				m8 = floor(100*meets[i]/total[i]);
				b8 = floor(100*below[i]/total[i]);
			}
		}
	}


}