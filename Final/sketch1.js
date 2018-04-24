var table;
var race = [], sex = [];
var whitemen = 0, whitewomen = 0, blackmen = 0, blackwomen = 0, other = 0;
var wmrect, wwrect, bmrect, bwrect, min, max;
var wmtarget, wwtarget, bmtarget, bwtarget, onetarget;

function preload() {
	table = loadTable('policedata.csv', 'csv', 'header');
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);
	stroke(180);
	strokeWeight(10);
	textAlign(LEFT);
	
	extractData();
	

	line(2*width/3-40, height/2+100, width, height/2+100);
	line(2*width/3-40, 0, 2*width/3-40, height);
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

	
}

function draw() {
	fill(180);
	textSize(60);
	push();
	strokeWeight(2);
	text('Use of Force by Police in Minnneapolis, MN', 2*width/3-20, 40, height/2+100, 300);
	textSize(40);
	strokeWeight(0.5);
	text('WHO IS IT HAPPENING TO?', 2*width/3, height/2+180, 400);
	pop();
}

function extractData() {
	race = table.getColumn('Race');
	sex = table.getColumn('Sex');
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
	onetarget = min/2;

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
