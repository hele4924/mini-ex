var words = ["Press the dot","Press it again","One more time", "Almost there!","Finish line is close","you can do it", "YES!", "Just a little more"];
var index = 0;
var on = false;




function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
 frameRate (5);
}

function draw() {
  //rect
  if(on){
    noStroke();
    fill(0,100);
    rect(0, 0, width, height);
  } else {
    noStroke();
    fill(random(0,255),random(0,255),random(0,255),100);
    rect(0, 0, width, height);
  }

 drawThrobber(6);

//Button
  stroke(200,0,0);
  fill(150,0,0);
  ellipse(width/2, height/2,100,100);


}

function drawThrobber(num) {
  push();
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  for (var i = 0; i <= words.length; i++) {
  fill(255);
  textSize(32);
  text(words[index],90, 20);}
  pop();
}

function mousePressed() {
  //text
    index=index+1;
    if (index== words.length) {
      index = 0;
      fill(random(0,255),random(0,225),random(0,255));
    }
  //rect
   on=!on;
 }
