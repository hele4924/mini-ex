var img;
var img2;
let flies = [];
var ran;


function preload() {
img=loadImage('frog.png');
img2 = loadImage('swamp.jpg');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i = 0; i <3; i++) {
    let xpos = random(width);
    let ypos = random(height);
    flies[i] =new fly(xpos,ypos,20);
  }
}

function draw(){
  background(img2);
image(img,width/2,height/2);
ran = random(10,);

//FROG: Mouth
fill(0);
strokeWeight(2);
stroke(90,100,70);
ellipse(width/2+125,height/2+140,40,20);
//FROG: toung
stroke(200,10,40);
strokeWeight(18);
line(width/2+125,height/2+142,mouseX,mouseY);


  for(let i = 0; i <flies.length; i++) {
    flies[i].move();
    flies[i].show();
    flies[i].edges();
  }
}

class fly {
  constructor(xpos,ypos,size){
      this.xpos = xpos
      this.ypos = ypos
      this.size = size
  }
  move(){
    this.xpos = this.xpos + ran;
    this.ypos = this.ypos + ran;
  }
  edges(){
    if(this.xpos < 0 || this.xpos > width){
      ran *= -1;
    }
    else if(this.ypos < 0 || this.ypos > height){
      ran *= -1;
    }
  }
  show(){
    noStroke();
    fill(0);
    ellipse(this.xpos,this.ypos,this.size*2);
    fill(255);
    ellipse(this.xpos+20,this.ypos,this.size+15, this.size-2);
    ellipse(this.xpos-20,this.ypos,this.size+15, this.size-2);
  }
}
