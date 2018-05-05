var overOne, overTwo, overThree, overReset;
var state=0;
var table, table2, table3;

// state one variables
var year = [], month = [], hour = [];
var minyear, maxyear;
var mincount, maxcount;
var yearcounts = {};
var monthcounts = {};
var minmonth, maxmonth;
var monthmapped = [];
var m2008 = {}, m2009 = {}, m2010 = {}, m2011 = {}, m2012 = {}, m2013 = {}, m2014 = {}, m2015 = {}, m2016 = {}, m2017 = {}, m2018 = {};

//state two variables
var race = [], sex = [];
var whitemen = 0, whitewomen = 0, blackmen = 0, blackwomen = 0, other = 0;
var min, max;
var wmtarget, wwtarget, bmtarget, bwtarget, onetarget;

//state three variables 
var problems=[], probcount=[];

//var mincount3, maxcount3;

function preload() {
	table1 = loadTable('policedata.csv', 'csv', 'header');
	table2 = loadTable('policedata2.csv', 'csv', 'header');
	table3 = loadTable('problemtable.csv', 'csv', 'header');
}

function setup() {
	extractData();
	createCanvas(windowWidth, windowHeight);
	//createCanvas(1920, 1080);
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
	noStroke();

	rectMode(CENTER);
	rect(division+division/12, height/2-40, 80, 30, 20);
	rect(division+3*division/12, height/2-40, 80, 30, 20);
	rect(division+5*division/12, height/2-40, 80, 30, 20);
	rect(division+3*division/12, height/2-80, 100, 30, 20);
	// ellipse(division+(1*division/12), height/2-40, 80, 40);
	// ellipse(division+(3*division/12), height/2-40, 80, 40);
	// ellipse(division+(5*division/12), height/2-40, 80, 40);
	// ellipse(division+(3*division/12), height/2-100, 80, 40);

	//**************** setting up for the mousepressed state ******************
	var distOne = dist(mouseX, mouseY, division+(1*division/12), height/2-40);
	var distTwo = dist(mouseX, mouseY, division+(3*division/12), height/2-40);
	var distThree = dist(mouseX, mouseY, division+(5*division/12), height/2-40);
	var distReset = dist(mouseX, mouseY, division+3*division/12, height/2-80)
	if (distOne < 30) {
		overOne = true;
	}
	else {overOne=false;}
	if (distTwo < 30) {
		overTwo = true;
	}
	else {overTwo=false;}
	if (distThree < 30) {
		overThree = true;
	}
	else {overThree=false;}
	if(distReset < 30) {
		overReset = true;
	}
	else{overReset=false;}
	//***********************************************************************

	// ********************* setting up states ****************************
	if(state == 0) {
		background(80);
		//drawing circles to select state
		fill('rgba(151, 255, 119, 0.7)');
		noStroke();
		rectMode(CENTER);
		rect(division +division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-40, 80, 30, 20);
		rect(division+5*division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-80, 100, 30, 20);
		fill(80);
		textAlign(CENTER);
		textSize(16);
		text('When?', division +division/12, height/2-35);
		text('Who?', division +3*division/12, height/2-35);
		text('Why?', division +5*division/12, height/2-35);
		text('Reset', division+3*division/12, height/2-75)
		textSize(60);
		fill(255);
		text('What do you want to know?', division+division/4, height/3, division/2, height/2);
		stroke(255);
		strokeWeight(4);
		line(division + 20, 20, division + 20, height-20);
		line(division + 40, height/2, width-20, height/2);

		noStroke();
		textStyle(BOLD);
		textSize(100);
		text('Use of Force by Police in Minneapolis, MN.', division/2, height/2+50, division, height);
		textSize(30);
		text('Anna Carlson', division/2, 3*height/4+50, division, height/4);
		text('source: City of Minneapolis', division/2, 3*height/4+100, division, height/4);
		textStyle(NORMAL);


	}
	if(state == 1) {
		background(80);
		//drawing circles to select state
		fill('rgba(151, 255, 119, 0.7)');
		noStroke();
		rectMode(CENTER);
		rect(division +division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-40, 80, 30, 20);
		rect(division+5*division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-80, 100, 30, 20);
		fill(80);
		textAlign(CENTER);
		textSize(16);
		text('When?', division +division/12, height/2-35);
		text('Who?', division +3*division/12, height/2-35);
		text('Why?', division +5*division/12, height/2-35);
		text('Reset', division+3*division/12, height/2-75)
		textSize(60);
		fill(255);
		text('What do you want to know?', division+division/4, height/3, division/2, height/2);
		stroke(255);
		strokeWeight(4);
		line(division + 20, 20, division + 20, height-20);
		line(division + 40, height/2, width-20, height/2);
		line(20, height/2, division-20, height/2);

		drawDots(2008, 60);
		drawDots(2009, 60+1*division/10);
		drawDots(2010, 60+2*division/10);
		drawDots(2011, 60+3*division/10);
		drawDots(2012, 60+4*division/10);
		drawDots(2013, 60+5*division/10);
		drawDots(2014, 60+6*division/10);
		drawDots(2015, 60+7*division/10);
		drawDots(2016, 60+8*division/10);
		drawDots(2017, 60+9*division/10);
		//drawing months
		var startmonth = 20;
		stroke('rgba(151, 255, 119, 0.7)');
		strokeWeight(4);
		for(var i =0; i <12; i++) {
			var y1 = height/2 - monthmapped[i];
			var y2 = height/2 - monthmapped[i+1];
			line(startmonth, y1, startmonth+division/12, y2);
			startmonth = startmonth + division/12;
		}
		//console.log(monthmapped[1]);



		stroke('rgba(255, 255, 255, 0.6)');
		strokeWeight(4);
		line(20+ division/10, height-20, 100+8*division/10, height-20);
		line(20+division/10, height/2-20, 100+8*division/10, height/2-20);
		noStroke();
		fill('rgba(255, 255, 255, 0.6)');
		textSize(30);
		textAlign(CENTER);
		text('2008', 60, height-12);
		text('2017', 60+9*division/10, height-12);
		text('Jan', 60, height/2-12);
		text('Dec', 60+9*division/10, height/2-12);

		// text('jan', 60, height-60);
		// text('dec', 60, 60);

		//text('In general, use of force by police seems to have gone down over time.')
		fill(255);
		textSize(80);
		text('WHEN?', 5*width/6, 40+ 3*height/4);

	}
	else if(state == 2) {
		background(80);
		//drawing circles to select state
		fill('rgba(151, 255, 119, 0.7)');
		noStroke();
		rectMode(CENTER);
		rect(division +division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-40, 80, 30, 20);
		rect(division+5*division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-80, 100, 30, 20);
		fill(80);
		textAlign(CENTER);
		textSize(16);
		text('When?', division +division/12, height/2-35);
		text('Who?', division +3*division/12, height/2-35);
		text('Why?', division +5*division/12, height/2-35);
		text('Reset', division+3*division/12, height/2-75)
		textSize(60);
		fill(255);
		text('What do you want to know?', division+division/4, height/3, division/2, height/2);
		stroke(255);
		strokeWeight(4);
		line(division + 20, 20, division + 20, height-20);
		line(division + 40, height/2, width-20, height/2);

		rectMode(CORNER);
		push();
		stroke(255);
		strokeWeight(4);
		var heightdiv = 6*height/7
		line(20, heightdiv, division-20, heightdiv);
		//rect(0, 2*height/3 + 80, 2*width/3 - 45, 30); // river and axis
		textSize(20);
		fill(255);
		textAlign(CENTER);
		textStyle(ITALIC);
		noStroke();
		drawTargets(bmtarget, 2*width/12-60, heightdiv-25);
		text("BLACK MEN", 2*width/12-60, heightdiv +25);
		drawTargets(bwtarget, 4*width/12+60, heightdiv-25);
		text("BLACK WOMEN", 4*width/12+60, heightdiv +25);
		drawTargets(wmtarget, 3*width/12, heightdiv-25);
		text("WHITE MEN", 3*width/12, heightdiv +25);
		drawTargets(wwtarget, 5*width/12+120, heightdiv-25);
		text("WHITE WOMEN", 5*width/12+120, heightdiv +25);

		drawTargets(1, 2*width/3-250, 50);
		text("= "+onetarget+" PEOPLE", 2*width/3-150, 60);
		pop();
		textStyle(NORMAL);
		textAlign(CENTER);
		textSize(80);
		text('WHO?', 5*width/6, 40+ 3*height/4);

	}

	else if (state == 3) {
		background(80);
		//drawing circles to select state
		fill('rgba(151, 255, 119, 0.7)');
		noStroke();
		rectMode(CENTER);
		rect(division +division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-40, 80, 30, 20);
		rect(division+5*division/12, height/2-40, 80, 30, 20);
		rect(division+3*division/12, height/2-80, 100, 30, 20);
		fill(80);
		textAlign(CENTER);
		textSize(16);
		text('When?', division +division/12, height/2-35);
		text('Who?', division +3*division/12, height/2-35);
		text('Why?', division +5*division/12, height/2-35);
		text('Reset', division+3*division/12, height/2-75)
		textSize(60);
		fill(255);
		text('What do you want to know?', division+division/4, height/3, division/2, height/2);
		stroke(255);
		strokeWeight(4);
		line(division + 20, 20, division + 20, height-20);
		line(division + 40, height/2, width-20, height/2);

		rectMode(CORNER);
		noStroke();
		fill('rgba(151, 255, 119, 0.5)');
		var starty3 = 10;
		for (var i=0; i<problems.length; i++) {
			var startx3 = 10;
			for (var j = 0; j < probcount[i]; j++) {
				if(startx3<division) {
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
			textAlign(LEFT);
			fill(255, 160);
			var textsize = map(probcount[i], 650, 4335, 18, 114);
			textSize(textsize);// for now, used actual min (650) and actual max(4355) bc it's saying min(probcounts) is not a function?
			text(problems[i], 10, starty3);
			pop();

			starty3 = starty3+25;

		}
		textAlign(CENTER);
		textSize(80);
		fill(255);
		text('WHY?', 5*width/6, 40+ 3*height/4);
	}
	if(overReset == true | overOne == true | overTwo == true | overThree == true) {
		cursor(HAND);
	}
	else{cursor(ARROW);}
}

function mousePressed () {
	if(overReset == true) {
		state = 0;
	}
	else if(overOne == true) {
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

	for (var i = 0; i< month.length; i++) {
		if(month[i] in monthcounts) {
			monthcounts[month[i]]++;
		}
		else {
			monthcounts[month[i]] = 1;
		}
	}

	for (var i = 1; i < 12; i++) {
		if (!minmonth) {
			minmonth = monthcounts[i];
		}
		else if (monthcounts[i]<minmonth) {
			minmonth = monthcounts[i];
		}
		else {
			minmonth = minmonth;
		}

		if (!maxmonth) {
			maxmonth = monthcounts[i];
		}
		else if (monthcounts[i] > maxmonth) {
			maxmonth = monthcounts[i];
		}
		else {
			maxmonth = maxmonth;
		}

	}
	for (var i = 0; i< 12; i++) {
		monthmapped[i] = map(monthcounts[i], minmonth, maxmonth, 40, 300);
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
	wmtarget = int(map(whitemen, min, max, 2, 12));
	wwtarget = int(map(whitewomen, min, max, 2, 12));
	bmtarget = int(map(blackmen, min, max, 2, 12));
	bwtarget = int(map(blackwomen, min, max, 2, 12));
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

function drawLines (yearnum, x) {
	var hght = map(yearcounts[yearnum], mincount, maxcount, 100, height-100);
	line(x, height-40, x, height-hght);
}

function drawDots(yearnum, x) {
	noStroke();
	fill('rgba(151, 255, 119, 0.8)');
	var maxDots = (height/2-60)/5;
	var numdots = map(yearcounts[yearnum], mincount, maxcount, 10, maxDots);
	var startY = height-40;
	for (var i =0; i<numdots; i++) {
		ellipse(x, startY, 4);
		startY = startY - 5;
	}
}

// function drawMonths(month, x) {
// 	line
// }

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