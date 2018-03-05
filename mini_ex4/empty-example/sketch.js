var mic;
var img

function preload(){
img= loadImage("ear2.png");
}

function setup() {
  // Audio
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  createCanvas(800, 700);
  image(img,220, 70);

  // audio
  var vol = mic.getLevel();

  // ellipse
  var h = map(vol, 0, 1, height, 0);
  noStroke();
  fill(200,0,50,190);
  ellipse(width/2, height/2 ,h-600,h-600);

  //text
  stroke(0);
  strokeWeight(5);
  textSize(32);
  textStyle(ITALIC);
  text('We heard you did last night',180, 50 );

}
