let baseImg, rainbowImg;

function preload() {
  baseImg    = loadImage('asset/schoolgirl.png');
  rainbowImg = loadImage('asset/rainbow.png');
}

function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  imageMode(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // do NOT clear the background – we want a “brush” trail
  if (mouseIsPressed) {
    image(rainbowImg, mouseX, mouseY, 100, 100);
  } else {
    tint(255, 127);            // make the school-girl semi-transparent
    image(baseImg, mouseX, mouseY, 100, 100);
    noTint();
  }
}
