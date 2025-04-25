function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

let baseImg, rainbowImg;

function preload() {
  baseImg    = loadImage('./asset/schoolgirl.png');
  rainbowImg = loadImage('./asset/rainbow.png');
}

function setup() {
  createCanvas(400, 400);
  background(0);
  imageMode(CENTER);
}

function draw() {
  if (mouseIsPressed) {
    image(rainbowImg, mouseX, mouseY, 100, 100);
  } else {
    tint(255, 127);                      
    image(baseImg, mouseX, mouseY, 100, 100);
    noTint();          
  }
}
