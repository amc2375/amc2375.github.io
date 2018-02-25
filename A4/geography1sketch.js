var table;
function preload() {
	table = loadTable('schooldata.csv', 'csv', 'header')
}

function setup() {
	createCanvas(1400, 740);
	background(200);
	text(table.getColumnCount() + ' total columns in table', width/2, height/2);
}