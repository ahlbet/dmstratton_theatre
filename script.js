var canvas;
var img;
var point;

function preload(){
  img = loadImage(img/about-opt.jpg);
}

function setup() {
  canvas = createCanvas(img.width, img.height);
  canvas.parent('about-point');
  
  point = 10;
  imageMode(CENTER);
  noStroke();
  background(255);
  img.loadPixels();
}

function draw() {
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  var pix = img.get(x,y);
  fill(pix, 128);
  ellipse(x, y, point, point);
}

//function mouseDragged(){
//  noStroke();
//  fill(125, 190, 160, 10);
//  ellipse(mouseX,mouseY,20,20);
//}
//
//function windowResized(){
//  resizeCanvas = (windowWidth, windowHeight);
//}

//function clear(){
//  if (key == 'c'){
//    
//  }
//}