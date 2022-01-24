function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
  	oldval = minute()
}

function draw() {
	background(225);
	textSize(32);
	
	//Background of clock
	fill(40);
	noStroke();
	triangle(100, 600, 400, 600, 250, 300);	
	triangle(400, 600, 700, 600, 550, 300);
	triangle(400, 600, 250, 300, 550, 300);

	//Hour Triangle expands and changes color across blue
	var hrval = hour();
	var hrtrans = map(hrval, 0, 24, 0, 300);
	var hrcolor = map(hrval, 0, 24, 155, 255);
	fill(110, 190,hrcolor);
	triangle(100, 600, 100+hrtrans, 600, 250, 300);

	//Minute Triangle expands and changes color across red
    var minval = minute();
    if (minval != oldval) {
      print(minval)
    }
	var mintrans = map(minval, 0, 60, 0, 300);
	var mincolor = map(minval, 0, 60, 155, 255);
    oldval = minval;
	fill( mincolor, 180, 190);
	triangle(700-mintrans, 600, 700, 600, 550, 300);

	
	//Second Triangle expands and changes color across green
	var secval = second();
	var sectrans = map(secval, 0, 60, 0, 300);
	var seccolor = map(secval, 0, 60, 155, 255);
	fill(110, seccolor, 190);
	triangle(400, 300+sectrans, 250, 300, 550, 300);
	
	
}