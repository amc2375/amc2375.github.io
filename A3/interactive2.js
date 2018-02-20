var bylines = [];
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
	background(180);
	noStroke();

	textSize(14);
	//textFont('New York Times');
	textStyle(BOLD);
	textAlign(CENTER);
	noLoop();

	extractBylines();

}

function draw() {
	translate(30, 0)


	for (var i = 0; i < bylines.length; i++) {
		var radius = map(bylines[i].length, minLen, maxLen, (minLen*2 + 20), (maxLen*2 + 20));
		var xcoord = map(bylines[i].length, minLen, maxLen, 0, width-radius);
		var ycoord = map(bylines[i].length, minLen, maxLen, 0, height);
		var liney1 = map(bylines[i].length, minLen, maxLen, height/2, height);
		var liney2 = map(bylines[i].length, minLen, maxLen, height/2, 0);
		fill(80, 120, 120, 100);
		ellipse(xcoord, height/2, radius, radius);
		push();
		stroke(40, 100);
		strokeWeight(30);
		fill(180, 120);
		line(xcoord, liney2, xcoord, liney1);
		pop();
		//text(bylines[i], circlex[i], circley[i]);

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