
var headlines = [];
var womenwords = [
	"woman",
	"women",
	"girl",
	"girls",
	"female",
	"feminine",
	"#metoo",
	"she",
	"her",
	"hers",
	"mother",
	"mothers",
	"daughter",
	"daughters",
	"sister",
	"sisters",
	"mom",
	"moms",
	"feminist"
	];
var trumpwords = [
	"trump",
	"trump's",
	"pence",
	"pence's",
	];

function preload() {

  // Assemble url for API call

 var apikey = "2f4346196818483da68092f53903fe76"; 
 var url = "https://api.nytimes.com/svc/topstories/v2/home.json";

 url += "?api-key=" + apikey;

 nytResponse = loadJSON(url);
}

function setup() {
	createCanvas(1400, 1220);
	background(50);
	textAlign(LEFT);
	textSize(14);
	noLoop();

	extractHeadlines();
//	extractAbstracts();
}

function draw() {

	var lineheight = 24;
	var margin = 40;
	translate(margin, margin);

	for (var i = 0; i < headlines.length; i++) {
		var words = split(headlines[i], ' ');
		var nextX = 0;

		for (var j = 0; j < words.length; j++) {
			if(womenwords.includes(words[j].toLowerCase())) {
				fill('pink');
				textStyle(BOLD);
			}
			else if (trumpwords.includes(words[j].toLowerCase())) {
				fill(50);
				words[j] = words[j].replace("Trump", "T****");

			}
			else {
				textSize(14);
				textStyle(NORMAL);
				fill(150);
			}

			text(words[j] + ' ', nextX, i*lineheight);
			nextX += textWidth(words[j] + ' ');
		}

	} 
	push();
	stroke('pink');
	strokeWeight(1);
	textStyle(BOLD);
	fill('pink');
	textStyle(NORMAL);
	textSize(32);
	text("ny times headlines, modified...", 750, 230);
	textSize(64);
	textStyle(BOLD);
	text("MORE WOMEN,", 800, 300);
	textStyle(ITALIC);
	text("LESS TRUMP", 750, 350);
	pop();
}

function extractHeadlines() {
	//console.log(nytResponse);

	for (var i = 0; i < nytResponse.results.length; i++) {
		var h = nytResponse.results[i].title;
		append(headlines, h);
	}

	//console.log(headlines);

} 

