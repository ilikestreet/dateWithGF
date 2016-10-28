var importantDate = new Date("October 21, 2016 23:00:59");
var now = Date.now();
var already = Math.abs(now - importantDate.getTime())/(1000 * 3600 * 24);

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  impDate();
  location.reload();
}


function impDate(){
  fill(color("#f788d9"));
  noStroke();
  textSize(32);
	text("We begin on ===> " + importantDate.toString(), windowWidth/8,windowHeight/2.5);
	text("Already ===> " + str(already) + " days", windowWidth/4, windowHeight/2);
}