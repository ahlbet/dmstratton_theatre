function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
}

function mouseDragged(){
  noStroke();
  fill(125, 230, 160, 50);
  ellipse(mouseX,mouseY,20,20);
}

function windowResized(){
  resizeCanvas = (windowWidth, windowHeight);
}

//function clear(){
//  if (key == 'c'){
//    
//  }
//}