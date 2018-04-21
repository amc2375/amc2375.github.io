var table;
var centerX=[], centerY=[];
var minX, maxX, minY, maxY;
var Xcoord = [], Ycoord = [];

var division;

function preload() {
	table = loadTable('policedata.csv', 'csv', 'header');
	
}

function setup() {
	createCanvas(windowWdith, windowHeight);
	background(80);

	division = 2*width/3;

	extractData();
	console.log(Xcoord);
}


function extractData() {
	centerX = table.getColumn('CenterX');
	centerY = table.getColumn('CenterY');

	minX = min(centerX);
	minY = min(centerY);
	maxX = max(centerX);
	maxY = max(centerY);

	for (var i = 0, i<centerX.length, i++) {
		Xcoord[i] = map(centerX[i], minX, maxX, 0, divison);
		Ycoord[i] = map(centerY[i], minY, maxY, height, 0);
	}
}