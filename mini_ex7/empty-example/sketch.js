var women = ["No woman gets an orgasm from shining the kitchen floor","Beating women is not cultural, its criminal","Who run the world? Girls","Rape happens because rapist choose to rape. Period"];
var trump = ["Just grab them by the pussy","as long as you've got a young and beautiful piece of ass","I bet you make a great wife.","when I come home and dinner's not ready, I go through the roof","What did these geniuses expect when they put men & women together?"];
var img
var img2
var index = 0;

function preload(){
  img = loadImage('donald.png');
  img2 = loadImage('women.png');
}

function setup(){
  createCanvas(1600,1000);
  frameRate(1);

}

function draw(){
  background(255, 204, 255);
  image(img, 1000,500);
  image(img2,10,10);
  fill(139,0,139);
  textSize(32);

if (keyIsDown(38)){
  text(women[index],200,120);
  text(random(trump),250,850);
}


// text(random(women),250,150);
// fill(255, 0, 255);
// text(random(trump),250,700);

  }
