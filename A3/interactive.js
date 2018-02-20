
var headlines = [], bylines = [];
var minlen, maxlen;
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
	"pence's"
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
	//noLoop();

	extractHeadlines();
	extractBylines();

}

function draw() {
	background(50);
	var lineheight = 24;
	var margin = 40;
	var rectH = 14;
	translate(margin, margin);

	for (var i = 0; i < headlines.length; i++) {
		noStroke();
		var rectW = textWidth(headlines[i]);
		if (mouseX > margin && 
			mouseX < margin+rectW && 
			mouseY < margin+i*lineheight && 
			mouseY > margin+i*lineheight+(-1*rectH)) {
			fill(255, 150);
		}
		else {
			fill(50);
		}
		rect(0, i*lineheight+3, rectW, -1*rectH);
	}

	for (var i = 0; i < headlines.length; i++) {
		var words = split(headlines[i], ' ');
		var nextX = 0;

		//noStroke();
		for (var j = 0; j < words.length; j++) {
			if(womenwords.includes(words[j].toLowerCase())) {
				fill('pink');
				textStyle(BOLD);
			}
			else if (trumpwords.includes(words[j].toLowerCase())) {
				fill(80);
				words[j] = words[j].replace("Trump", "T****");
			}
			else {
				textSize(14)
				textStyle(NORMAL);
				fill(100);
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
	text("ny times headlines, modified...", 700, 230);
	textSize(64);
	textStyle(BOLD);
	text("MORE WOMEN,", 750, 300);
	textStyle(ITALIC);
	text("LESS TRUMP", 700, 350);
	pop();


	for (var i = 0; i < headlines.length; i++) {
		var rectW2 = textWidth(headlines[i]);
		if (mouseX > margin && 
			mouseX < margin+rectW2 && 
			mouseY < margin+i*lineheight && 
			mouseY > margin+i*lineheight+(-1*rectH)) {
			fill(255, 192, 203, 100);
			//var boxW = textWidth(bylines[i]);
			rect(mouseX, mouseY, 230, 30);
			fill(255);
			textSize(20);
			if(!mouseIsPressed) {
				text("click to see who wrote this", mouseX+10, mouseY+10);
			}
			if(mouseIsPressed) {
				push();
				textSize(50);
				text(bylines[i], mouseX+10, mouseY+10);
				pop();
			}
			//text(bylines[i], mouseX+10, mouseY+30);
		}
	}

}

function extractHeadlines() {
	//console.log(nytResponse);

	for (var i = 0; i < nytResponse.results.length; i++) {
		var h = nytResponse.results[i].title;

		if (!maxlen) {
			maxlen = h.length;
		}
		else if (h.length > maxlen) {
			maxlen = h.length;
		}

		if (!minlen) {
			minlen = h.length;
		}
		else if (h.length < minlen) {
			minlen = h.length
		}

		append(headlines, h);
	}
	//console.log(headlines);

} 

function extractBylines() {
	for (var i = 0; i < nytResponse.results.length; i++) {
		var b = nytResponse.results[i].byline;
		b = b.replace("By ", "");
		b = b.toLowerCase();
		append(bylines, b);
	}
}

