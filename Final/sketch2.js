var table;
var centerX=[], centerY=[];
var minX, maxX, minY, maxY;
var coordX = [], coordY = [];

function preload() {
	table = loadTable('policedata.csv', 'csv', 'header');
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);

	var division = 2*width/3;

	extractData();
	drawPoints();
}


function extractData() {
	centerX = table.getColumn('CenterX');
	centerY = table.getColumn('CenterY');

	minX = min(centerX);
	minY = min(centerY);
	maxX = max(centerX);
	maxY = max(centerY);

	for (var i = 0; i<centerX.length; i++) {
		coordX[i] = map(centerX[i], minX, maxX, 0, divison);
		coordY[i] = map(centerY[i], minY, maxY, height, 0);
	}
}

function drawPoints() {
	fill(151, 255, 119);
	noStroke();
	for (var i=0; i<coordX.length; i++) {
		ellipse(coordX[i], coordY[i], 3);
	}
}