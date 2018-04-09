var name

var api = 'http://content.guardianapis.com/search?q=';

var apiKey = '&api-key=e556b2f3-4b94-458d-9aba-33fd3834d6a3';
var input;


function setup(){
  createCanvas(400,400);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#what')
}


function weatherAsk(){
  var url = api + input.value() + apiKey;
  loadJSON(url, gotData, 'jsonp')
}

function gotData(data){
name = data.response.results[1].webTitle.toString();
console.log(name);
}



function draw(){
  background(0);
  fill(255);
text(name, 50,height/2-100);

}
