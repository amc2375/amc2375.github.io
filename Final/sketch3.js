var table;
var problemcounts;

function preload() {
	table = loadTable('policedata.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);

	extractData();

	console.log(problemcounts[1]);
}

function draw() {

}

function extractData() {
	problem = table.getColumn('Problem');
	for (var i = 0; i < problem.length; i++) {
		var problem = probelm[i];

		if(!problemcounts) {
			problemcounts = createNumberDict(problem, 1);
		}
		else if (!problemcounts.hasKey(problem,1)) {
			problemcounts.create(problem, 1);
		}
		else {
			problemcounts.add(problem, 1);
		}
	}
}




// for (var j = 0; j < headline.length; j++) {
//       var letter = headline[j];

//       // Our letterCounts var is a NumberDict type
//       // see https://p5js.org/reference/#/p5.NumberDict
//       if (!letterCounts) {
//         letterCounts = createNumberDict(letter, 1);
//       } else if (!letterCounts.hasKey(letter)){
//         letterCounts.create(letter, 1);
//       } else {
//         letterCounts.add(letter, 1);
//       }
//     }