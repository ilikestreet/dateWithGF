
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  impDate();
}


function impDate(){
	var importantDate = new Date("October 21, 2016 23:00:59");
	var now = Date.now();
	var diffMs = now - importantDate.getTime();
	var alreadyDays = round(diffMs/86400000);
	var alreadyHours = round((diffMs % 86400000) / 3600000);
	var alreadyMinutes = round(((diffMs % 86400000) % 3600000) / 60000);
	var alreadySeconds = round(diffMs / (1000) % 60,3);

	fill(color("#f788d9"));
	noStroke();
	textSize(34);
	textAlign(CENTER,CENTER);

	text("We are in love on  ===> " + importantDate.toString(), windowWidth/2,windowHeight/2.5);
	text("Already ===> " + str(alreadyDays) + " days " + 
		str(alreadyHours) + " hours " + str(alreadyMinutes) + " Minutes " +
		str(alreadySeconds) + " Seconds " 
		, windowWidth/2, windowHeight/2);
	
	textAlign(LEFT,LEFT);
	fill(0);
	textSize(12);
	text("Credited by Johnny Zhang", windowWidth/1.3,windowHeight/1.2);


}