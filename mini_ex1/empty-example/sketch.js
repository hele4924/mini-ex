var circleX=-350
var circleY=-300

function setup() {
//canvas
createCanvas(1000,600,WEBGL);

//background
background(255,96,152);
}

function draw() {
  //rectangle
stroke(253,152,65);
fill(253,152,65);
rect(-350,50,50,50);

//cone
rotateY(millis() / 1000);
fill(250,50,61);
cone(60,80);
console.log("hello World!");
}

function mousePressed() {
  //Ellipse
  circleY=circleY+20;
  circleX=circleX+10;
  stroke(20,150,10)
  fill(25,46,125);
  ellipse(circleX,circleY,50,50);
  }
