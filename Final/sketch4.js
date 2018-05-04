var table;
var year = [], month = [], hour = [];
var minyear, maxyear;
var mincount, maxcount;

var yearcounts = {};
var m2008 = {}, m2009 = {}, m2010 = {}, m2011 = {}, m2012 = {}, m2013 = {}, m2014 = {}, m2015 = {}, m2016 = {}, m2017 = {}, m2018 = {};

function preload() {
	table = loadTable('policedata2.csv', 'csv', 'header');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);
	var division = 2*width/3

	extractData();



	//******************* order and draw by year *************************
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
	line(division + 20, 20, division + 20, height-20);
	line(division + 40, height/2, width-20, height/2);
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
	textAlign(CENTER);
	textSize(50);
	text('USE OF FORCE BY POLICE IN MINNEAPOLIS, MN', division+25, 10, width/3-25, height/2);

	
}



function extractData() {
	year = table.getColumn('YEAR');
	month = table.getColumn('Month');
	hour = table.getColumn('Hour');

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


}

function drawCircles (n, startx, starty) {
	var numb = map(n, mincount, maxcount, 100, height-100);
	for (var i = 0; i < n; i++) {
		fill('rgba(151, 255, 119, 0.5)');
		noStroke();
		ellipse(startx, starty, 4, 4);
		starty = starty-6;
	}
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

// function drawRect (yearnum, startx, starty) {
// 	var hght = map (yearnum, mincount, maxcount, 100, height-100);
// 	for (var i = 1; i<12; i++) {
// 		for (var j = 0; j)
// 	}
// }

// need a count of each month for each year, then can iterate through in the loop in draw rect to 
// draw a rect for each month, with the color mapped to the number for that month


// communityBoards.forEach(function(cb) {
//     if (cb in gardenCounts) {
//       gardenCounts[cb]++;
//     } else {
//       gardenCounts[cb] = 1;
//     }
//   });