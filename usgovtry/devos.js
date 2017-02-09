var img;

function preload() {
   img = loadImage("img/devos.jpg");
}

function setup() {
  var canvas = createCanvas(img.width, img.height);
  
  canvas.parent('devos-sketch-area');
  image(img, 0, 0);
  frameRate(8);
}

function draw() {
  
}

function mouseDragged() {
  var a = 0;
  var tanA = Math.floor(Math.tan(a)*10);
  var sinA = Math.floor(Math.sin(a)*10);
  var x = mouseX;
  var rndX1 = Math.floor(Math.random()*img.width);
  var rndX2 = Math.floor(Math.random()*img.width);
  var rndY1 = Math.floor(Math.random()*img.height);
  var rndY2 = Math.floor(Math.random()*img.height);

  img.loadPixels();
   
   for(var i=0; i<img.pixels.length; i++) {
     img.pixels[i] = img.pixels[i+x*10];
     img.pixels[i+x*10] = img.pixels[i+tanA];
     img.pixels[i+tanA] = img.pixels[i+sinA];
     a += 1;
   }
  
  for (var i = img.pixels.length; i>0; i--) {
    img.pixels[i] = img.pixels[i-1];
    img.pixels[i-1] = img.pixels[i-(i-1)];
    
  }
   
  img.updatePixels();
  image(img, 0, 0);
  
  for (var i = 0; i<30; i++){
    strokeWeight(1.5);
    stroke(255);
    noFill();
    line(rndX1*i/2, rndY1*i/2, rndX2*i/2, rndY2*i/2);
  }
}
