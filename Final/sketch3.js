var table;
var problemCounts;
var problems=[], count=[];

function preload() {
	table = loadTable('problemtable.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);

	extractData();
	strokeWeight(10);
	stroke(180);

	line(2*width/3, height/2+100, width, height/2+100);
	line(2*width/3, 0, 2*width/3, height);
	textSize(60);
	noStroke();
	push();
	fill(255, 180);
	textAlign(RIGHT);
	text('Use of Force by Police in Minnneapolis, MN', 2*width/3+10, 40, height/2+100, 300);
	textSize(40);
	text('WHY IS IT HAPPENING?', 2*width/3 +10 , height/2+120, width/3-40, 300);
	pop();

	//*************draw boxes*************
	fill('rgba(151, 255, 119, 0.5)');
	var starty = 10;
	for (var i=0; i<problems.length; i++) {
		var startx = 10;
		for (var j = 0; j < count[i]; j++) {
			if(startx<2*width/3) {
				rect(startx, starty, 3, 3);
				startx = startx+5.5;
			}
			else {
				startx = 10;
				starty = starty + 5.5;
				rect(startx, starty, 3, 3);
			}
			
		}
		push();
		fill(255, 180);
		textSize(map(count[i], min(count), max(count), 18, 114));
		text(problems[i], 10, starty);
		pop();

		starty = starty+25;

	}

}

function draw() {

}

function extractData() {
	problems = table.getColumn('Problem');
	count = table.getColumn('Count');
}

// function extractData() {
// 	problems = table.getColumn('Problem');


// 	for (var i = 0; i < problems.length; i++) {
// 		var problem = problems[i];

// 		if(!problemCounts) {
// 			problemCounts = createNumberDict(problem, 1);
// 		}
// 		else if (!problemCounts.hasKey(problem)) {
// 			problemCounts.create(problem, 1);
// 		}
// 		else {
// 			problemCounts.add(problem, 1);
// 		}
// 	}

// 	//removing all but top 10
// 	for (var i = 0; i < problems.length; i++) {
// 		var problem = problems[i];
// 		if(problemCounts.hasKey(problem)) {
// 			if(problemCounts.get(problem)<600) {
// 				problemCounts.remove(problem);
// 			}
// 		}

// 	}

// 	problemCounts.saveTable('problemtable');
// }
