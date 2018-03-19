 var words = ["T","h","i","s","I","s","B","u","l","l","s","h","i","t"];
var index = 0;
var on = false;
var xoff1 = 0
var xoff2 = 10000
let x = 0;
let y = 0;
let spacing = 10;


function setup() {
 createCanvas(800, windowHeight);
 background(1);
 frameRate (9);
}

function draw() {
  noStroke();
  fill(20,1);
  rect(0, 0, width, height);

  var s1 = map(noise(xoff1),0,1,0,width);

  xoff1 += 0.02;


  x+=150;
if (x > width) {
  x = 0;
  y += spacing+100;
}
if (y > height) {
  y = 0;
}


  index=index+1;
  if (index == words.length) {
    index = 0;
  }
  for (var i = 0; i <= words.length; i++) {
    stroke(random(0,255),random(0,255),random(0,255),random(0,255));
    noFill();
    textSize(random(10,150));
    text(words[index],x,y+100);
  }
  if (random(1)<0.3){
    for (var i = 0; i <= 3; i++) {
      stroke(255,random(0,255),0,random(0,255));
      noFill();
      textSize(s1);
      text(words[i],s1,s1+100);
  }
}
}
