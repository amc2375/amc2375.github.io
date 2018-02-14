var bylines = [];
var circlex = [], circley = [];
var maxLen, minLen;

function preload() {

  // Assemble url for API call

 var apikey = "2f4346196818483da68092f53903fe76"; 
 var url = "https://api.nytimes.com/svc/topstories/v2/home.json";

 url += "?api-key=" + apikey;

 nytResponse = loadJSON(url);
}

function setup () {
	createCanvas(1400, 740);
	background(60,60,100);
	noStroke();

	textSize(14);
	//textFont('New York Times');
	textStyle(BOLD);
	textAlign(CENTER);
	noLoop();

	extractBylines();

	for (var i = 0; i < bylines.length; i++) {
		append(circlex, random(width));
		append(circley, random(height));
	}
}

function draw() {
	var margin = 40;
	translate(margin, margin);


	for (var i = 0; i < bylines.length; i++) {
		var radius = map(bylines[i].length, minLen, maxLen, (minLen*2 + 20), (maxLen*2 + 20));

		fill(130);
		ellipse(circlex[i], circley[i], radius, radius);
		fill(180);
		text(bylines[i], circlex[i], circley[i]);

	}
	console.log(maxLen);
}



function extractBylines() {

	for (var i = 0; i < nytResponse.results.length; i++) {
		var b = nytResponse.results[i].byline;

		if(!maxLen) {
			maxLen = b.length;
		}
		else if (b.length > maxLen) {
			maxLen = b.length;
		}

		if(!minLen) {
			minLen = b.length;
		}
		else if (b.length < minLen) {
			minLen = b.length;
		}

		append(bylines, b);
	}

} 