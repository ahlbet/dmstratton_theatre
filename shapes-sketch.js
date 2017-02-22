var img;
var shapeSize = 100;

function preload() {
  img = loadImage("img/trump-shapes.jpg");
}

function setup() {
  var canvas = createCanvas(img.width, img.height);
  
  canvas.parent('sketch-area');
  background(255);
  
  rectMode(CENTER);
 
}

function draw() {}

function mouseDragged() {

  var offSet = 200;
  var t = frameCount / 100.0;

//  var x = Math.floor(Math.random()*img.width);
//  var y = Math.floor(Math.random()*img.height);
  var x = mouseX;
  var y = mouseY;
  var c = color(img.get(x, y));
//  noFill();
  noStroke();
  fill(c, 1);
//  stroke(c, 128);
  
  if (key === 'r') {
    rect(x, y, shapeSize, shapeSize);
  }
  
  if (key === 'e') {
    ellipse(x, y, shapeSize, shapeSize);
  }
  
  if (key === 'l') {
    line(x, y, x+shapeSize, y+shapeSize);
  }
  
  if (key === 'd') {
    fill(255);
    ellipse(x, y, shapeSize, shapeSize);
  }
}

function keyTyped() {
  if (key === 'c') {
    fill(255);
    rect(width/2, height/2, width+10, height+10);
  }
}

function keyPressed() {
  if (keyCode === 187) {
    shapeSize += 10;
    
    var sizeSpan = $('#sizeSpan');
    sizeSpan.html('');
    sizeSpan.append('<span> ' + shapeSize + ' px.</span>');
  }
  if (keyCode === 189) {
    shapeSize -= 10;
    
    var sizeSpan = $('#sizeSpan');
    sizeSpan.html('');
    sizeSpan.append('<span> ' + shapeSize + ' px.</span>');
  }
}