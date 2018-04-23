var table;
var centerX=[], centerY=[];
var minX, maxX, minY, maxY;
var coordX = [], coordY = [];
//var division = 2*windowWidth/3;

function preload() {
	table = loadTable('policedata.csv', 'csv', 'header');
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);

	extractData();
	drawPoints();
	console.log(maxX);
}


function extractData() {
	centerX = table.getColumn('CenterX');
	centerY = table.getColumn('CenterY');

	minX = min(centerX);
	minY = min(centerY);
	maxX = max(centerX);
	maxY = max(centerY);

	for (var i = 0; i<centerX.length; i++) {
		coordX[i] = map(centerX[i], minX, maxX, 2*width/3, 50);
		coordY[i] = map(centerY[i], minY, maxY, 50, height);
	}
}

function drawPoints() {
	fill(151, 255, 119);
	noStroke();
	for (var i=0; i<coordX.length; i++) {
		ellipse(coordX[i], coordY[i], 5);
	}
}