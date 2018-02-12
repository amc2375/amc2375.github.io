var bylines = [];

function preload() {

  // Assemble url for API call

 var apikey = "2f4346196818483da68092f53903fe76"; 
 var url = "https://api.nytimes.com/svc/topstories/v2/home.json";

 url += "?api-key=" + apikey;

 nytResponse = loadJSON(url);
}

function setup () {
	createCanvas(1400, 740);
	background(200,200,240);

	textSize(39);
	//textFont('New York Times');
	textStyle(BOLD);
	textAlign(LEFT);
	noLoop();

	extractBylines();
}

function draw() {
	var margin = 18;
	translate(margin, margin);

	var bylineString = bylines.join(' ');
	bylines = split(bylineString, ' ');
	bylineString = bylines.join(' ');
	bylineString = bylineString.replace(/By/g, "");
	bylineString = bylineString.replace(/and/g, "");
	bylineString = bylineString.replace(/  /g, "  |  ");
	bylineString = bylineString.replace(" ", "");
	bylineString = bylineString.toLowerCase();
	bylines = split (bylineString, "  | ");

	fill(100);
	rectMode(CORNERS);
	text(bylineString, 0, 0, width-50, height-20);

	console.log(bylineString);
	console.log(bylines);
}



function extractBylines() {

	for (var i = 0; i < nytResponse.results.length; i++) {
		var b = nytResponse.results[i].byline;
		append(bylines, b);
	}

} 