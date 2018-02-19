
function setup() {
  createCanvas(800,500);
}

function draw() {
  background(100,150,255);


//eye right
  stroke(90,100,255);
  fill(700,255,255,255);
  ellipse(490,199,70,50);
  noStroke();
  fill(255,204,100);      //iris
  ellipse(490,199,30,30);
  fill(10,10,10);         //pupil
  ellipse(490,199,15,15);


//eye left
  stroke(90,100,255);
  fill(700,255,255,255);
  ellipse(310,199,70,50);
  noStroke();
  fill(255,204,100);      //iris
  ellipse(310,199,30,30);
  fill(10,10,10);        //pupil
  ellipse(310,199,15,15);

  if (mouseIsPressed){
//eyelid
    noStroke();
      fill(100,150,255);
      ellipse(310,199,70,50);
//Cheeks 
      fill(200,100,50,100);
      ellipse(290,290,40,40);
      ellipse(510,290,40,40);
    }

  //mouth
  fill('#222222');
  stroke(90,100,255);
  strokeWeight(6)
    beginShape();
    vertex(310,322);
    vertex(490,322);
    curveVertex(mouseX,mouseY);
    endShape(CLOSE);


}
function mousePressed(){
console.log(mouseX,mouseY);}
