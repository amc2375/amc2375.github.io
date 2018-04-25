var overOne, overTwo, overThree;
var state=0;
var table, table2, table3;

// state one variables
var year = [], month = [], hour = [];
var minyear, maxyear;
var mincount, maxcount;
var yearcounts = {};
var m2008 = {}, m2009 = {}, m2010 = {}, m2011 = {}, m2012 = {}, m2013 = {}, m2014 = {}, m2015 = {}, m2016 = {}, m2017 = {}, m2018 = {};

//state two variables
var race = [], sex = [];
var whitemen = 0, whitewomen = 0, blackmen = 0, blackwomen = 0, other = 0;
var wmrect, wwrect, bmrect, bwrect, min, max;
var wmtarget, wwtarget, bmtarget, bwtarget, onetarget;

//state three variables 
var problems=[], probcount=[];
var starty3 = 10;
//var mincount3, maxcount3;

function preload() {
	table1 = loadTable('policedata.csv', 'csv', 'header');
	table2 = loadTable('policedata2.csv', 'csv', 'header');
	table3 = loadTable('problemtable.csv', 'csv', 'header');
}

function setup() {
	extractData();
	createCanvas(windowWidth, windowHeight);
	var division = 2*width/3;
	
	background(80);
	stroke(255);
	strokeWeight(4);
	line(division + 20, 20, division + 20, height-20);
	line(division + 40, height/2, width-20, height/2);

	

	
}

function draw() {

	
	var division = 2*width/3


	//drawing circles to select state
	fill(255);
	ellipse(division+(1*division/12), height/2-40, 50, 50);
	ellipse(division+(3*division/12), height/2-40, 50, 50);
	ellipse(division+(5*division/12), height/2-40, 50, 50);
	var division = 2*width/3
	//**************** setting up for the mousepressed state ******************
	var distOne = dist(mouseX, mouseY, division+(1*division/12), height/2-40);
	var distTwo = dist(mouseX, mouseY, division+(3*division/12), height/2-40);
	var distThree = dist(mouseX, mouseY, division+(5*division/12), height/2-40);
	if (distOne < 50) {
		overOne = true;
	}
	else {overOne=false;}
	if (distTwo < 50) {
		overTwo = true;
	}
	else {overTwo=false;}
	if (distThree < 50) {
		overThree = true;
	}
	else {overThree=false;}
	//***********************************************************************

	// ********************* setting up state one ****************************
	if(state == 1) {
		background(80);
		//drawing circles to select state
		fill(255);
		ellipse(division+(1*division/12), height/2-40, 50, 50);
		ellipse(division+(3*division/12), height/2-40, 50, 50);
		ellipse(division+(5*division/12), height/2-40, 50, 50);
		stroke(255);
		strokeWeight(4);
		line(division + 20, 20, division + 20, height-20);
		line(division + 40, height/2, width-20, height/2);

		rectMode(CORNERS);
		drawRects(2008, m2008, 20, height-40);
		drawRects(2009, m2009, 20+ division/10, height-40);
		drawRects(2010, m2010, 20+ 2*division/10, height-40);
		drawRects(2011, m2011, 20+ 3*division/10, height-40);
		drawRects(2012, m2012, 20+ 4*division/10, height-40);
		drawRects(2013, m2013, 20+ 5*division/10, height-40);
		drawRects(2014, m2014, 20+ 6*division/10, height-40);
		drawRects(2015, m2015, 20+ 7*division/10, height-40);
		drawRects(2016, m2016, 20+ 8*division/10, height-40);
		drawRects(2017, m2017, 20+ 9*division/10, height-40);
		//drawRects(2018, m2018, 20+ 11*division/12, height-40);
		//why tf are my 2018 boxes drawing upside down???

		stroke(255);
		strokeWeight(4);
		line(20+ division/10, height-20, 100+8*division/10, height-20);
		noStroke();
		fill(255);
		textSize(30);
		textAlign(CENTER);
		text('2008', 60, height-12);
		text('2017', 60+9*division/10, height-12);

		text('jan', 60, height-60);
		text('dec', 60, 60);

		textSize(80);
		text('WHEN?', 5*width/6, 40+ 3*height/4);

	}
	else if(state == 2) {
		background(80);
		//drawing circles to select state
		fill(255);
		ellipse(division+(1*division/12), height/2-40, 50, 50);
		ellipse(division+(3*division/12), height/2-40, 50, 50);
		ellipse(division+(5*division/12), height/2-40, 50, 50);
		stroke(255);
		strokeWeight(4);
		line(division + 20, 20, division + 20, height-20);
		line(division + 40, height/2, width-20, height/2);

		push();
		fill('rgba(30, 144, 255, 0.4)');
		noStroke();
		rect(0, 2*height/3 + 80, 2*width/3 - 45, 30); // river and axis
		textSize(20);
		fill('rgba(151, 255, 119, 1)');
		textAlign(CENTER);
		textStyle(ITALIC);

		drawTargets(bmtarget, 2*width/12-60, 2*height/3 + 80);
		text("BLACK MEN", 2*width/12-60, 2*height/3 + 140);
		drawTargets(bwtarget, 4*width/12+60, 2*height/3 + 80);
		text("BLACK WOMEN", 4*width/12+60, 2*height/3 + 140);
		drawTargets(wmtarget, 3*width/12, 2*height/3 + 80);
		text("WHITE MEN", 3*width/12, 2*height/3 + 140);
		drawTargets(wwtarget, 5*width/12+120, 2*height/3 + 80);
		text("WHITE WOMEN", 5*width/12+120, 2*height/3 + 140);

		drawTargets(1, 2*width/3-250, 50);
		text("= "+onetarget+" PEOPLE", 2*width/3-150, 60);
		pop();

		textAlign(CENTER);
		textSize(80);
		text('WHO?', 5*width/6, 40+ 3*height/4);

	}

	else if (state == 3) {
		background(80);
		//drawing circles to select state
		fill(255);
		ellipse(division+(1*division/12), height/2-40, 50, 50);
		ellipse(division+(3*division/12), height/2-40, 50, 50);
		ellipse(division+(5*division/12), height/2-40, 50, 50);
		stroke(255);
		strokeWeight(4);
		line(division + 20, 20, division + 20, height-20);
		line(division + 40, height/2, width-20, height/2);

		noStroke();
		fill('rgba(151, 255, 119, 0.5)');
		
		for (var i=0; i<problems.length; i++) {
			var startx3 = 10;
			for (var j = 0; j < probcount[i]; j++) {
				if(startx3<2*width/3) {
					rect(startx3, starty3, 3, 3);
					startx3 = startx3+5.5;
				}
				else {
					startx3 = 10;
					starty3 = starty3 + 5.5;
					rect(startx3, starty3, 3, 3);
				}
				
			}
			push();
			fill(255, 180);
			textSize(map(probcount[i], 650, 4355, 18, 114));// for now, used actual min (650) and actual max(4355) bc it's saying min(probcounts) is not a function?
			text(problems[i], 10, starty3);
			pop();

			starty3 = starty3+25;

		}
		textAlign(CENTER);
		textSize(80);
		text('WHY?', 5*width/6, 40+ 3*height/4);
	}
}

function mousePressed () {
	if(overOne == true) {
		state = 1;
	}
	else if(overTwo == true) {
		state = 2;
	}
	else if(overThree == true) {
		state = 3;
	}
	return false;
}



function extractData() {
	//state 1 data
	year = table2.getColumn('YEAR');
	month = table2.getColumn('Month');
	hour = table2.getColumn('Hour');

	minyear = min(year);
	maxyear = max(year);

	for (var i=0; i < year.length; i++) {
		if(year[i] in yearcounts) {
			yearcounts[year[i]]++;
		}
		else {
			yearcounts[year[i]] = 1;
		}
	}


	for (var i = minyear; i < maxyear; i++) {
		if (!mincount) {
			mincount = yearcounts[i];
		}
		else if (yearcounts[i]<mincount) {
			mincount = yearcounts[i];
		}
		else {
			mincount = mincount;
		}

		if (!maxcount) {
			maxcount = yearcounts[i];
		}
		else if (yearcounts[i] > maxcount) {
			maxcount = yearcounts[i];
		}
		else {
			maxcount = maxcount;
		}

	}

	for (var i = 0; i< year.length; i++) {
		if(year[i] == 2008) {
			if (month[i] in m2008) {
				m2008[month[i]]++;
			}
			else {
				m2008[month[i]] = 1;
			}
		}
		else if(year[i] == 2009) {
			if (month[i] in m2009) {
				m2009[month[i]]++;
			}
			else {
				m2009[month[i]] = 1;
			}
		}
		else if(year[i] == 2010) {
			if (month[i] in m2010) {
				m2010[month[i]]++;
			}
			else {
				m2010[month[i]] = 1;
			}
		}
		else if(year[i] == 2011) {
			if (month[i] in m2011) {
				m2011[month[i]]++;
			}
			else {
				m2011[month[i]] = 1;
			}
		}
		else if(year[i] == 2012) {
			if (month[i] in m2012) {
				m2012[month[i]]++;
			}
			else {
				m2012[month[i]] = 1;
			}
		}
		else if(year[i] == 2013) {
			if (month[i] in m2013) {
				m2013[month[i]]++;
			}
			else {
				m2013[month[i]] = 1;
			}
		}
		else if(year[i] == 2014) {
			if (month[i] in m2014) {
				m2014[month[i]]++;
			}
			else {
				m2014[month[i]] = 1;
			}
		}
		else if(year[i] == 2015) {
			if (month[i] in m2015) {
				m2015[month[i]]++;
			}
			else {
				m2015[month[i]] = 1;
			}
		}
		else if(year[i] == 2016) {
			if (month[i] in m2016) {
				m2016[month[i]]++;
			}
			else {
				m2016[month[i]] = 1;
			}
		}
		else if(year[i] == 2017) {
			if (month[i] in m2017) {
				m2017[month[i]]++;
			}
			else {
				m2017[month[i]] = 1;
			}
		}
		else if(year[i] == 2018) {
			if (month[i] in m2018) {
				m2018[month[i]]++;
			}
			else {
				m2018[month[i]] = 1;
			}
		}
	}

	// state 2 data
	race = table1.getColumn('Race');
	sex = table1.getColumn('Sex');
	for (var i = 0; i < race.length; i++) {
		if (race[i] == 'White' && sex[i] == 'Male') {
			whitemen++;
		}
		else if (race[i] == 'White' && sex[i] == 'Female') {
			whitewomen++;
		}
		else if (race[i] == 'Black' && sex[i] == 'Male') {
			blackmen++;
		}
		else if (race[i] == 'Black' && sex[i] == 'Female') {
			blackwomen++;
		}
		else {
			other++
		}
	}
	min = min(whitemen, whitewomen, blackmen, blackwomen);
	max = max(whitemen, whitewomen, blackmen, blackwomen);
	wmrect = map(whitemen, min, max, 40, height/2 - 20);
	wwrect = map(whitewomen, min, max, 40, height/2 -20);
	bmrect = map(blackmen, min, max, 40, height/2 -20);
	bwrect = map(blackwomen, min, max, 40, height/2 -20);
	wmtarget = int(map(whitemen, min, max, 2, 10));
	wwtarget = int(map(whitewomen, min, max, 2, 10));
	bmtarget = int(map(blackmen, min, max, 2, 10));
	bwtarget = int(map(blackwomen, min, max, 2, 10));
	onetarget = int(min/2);

	//state 3 data
	problems = table3.getColumn('Problem');
	probcount = table3.getColumn('Count');
	//mincount3 = min(probcount);
	//maxcount3 = max(probcount);
}

function drawRects (yearnum, yearvar, startx, starty) {
	var hght = map(yearcounts[yearnum], mincount, maxcount, 100, height-100);
	if (yearnum == 2018) {
		var monthhght = hght/4;
	}
	else {
		var monthhght = hght/12;
	}
	for (var i = 1; i<13; i++) {
		var col = map(yearvar[i], 0, maxcount/12+100, 255,0);
		noStroke();
		fill(col);
		rect(startx, starty, startx+80, starty-monthhght);
		fill('rgba(151, 255, 119, 0.4)');
		rect(startx, starty, startx+80, starty-monthhght);
		starty = starty - monthhght - 3;
	}
}

function drawTargets(n, startX, startY) {
	for (var i=0; i<n; i++) {
		push();
		fill('rgba(151, 255, 119, 0.8)');
		noStroke();
		ellipse(startX, startY, 25, 25);
		pop();
		push();
		strokeWeight(3);
		stroke('rgba(151, 255, 119, 0.8)');
		noFill();
		ellipse(startX, startY, 40, 40);
		ellipse(startX, startY, 32, 32);
		pop();
		startY = startY -50;
	}
}