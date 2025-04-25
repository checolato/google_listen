let baseImg, rainbowImg;

function preload() {
  console.log('preload() start');
  baseImg = loadImage('asset/schoolgirl.png',
    () => console.log('✔ baseImg loaded'),
    e => console.error('✖ baseImg failed:', e)
  );
  rainbowImg = loadImage('asset/rainbow.png',
    () => console.log('✔ rainbowImg loaded'),
    e => console.error('✖ rainbowImg failed:', e)
  );
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
  // no background();  // keep trails
  if (mouseIsPressed) {
    image(rainbowImg, mouseX, mouseY, 100, 100);
  } else {
    tint(255, 127);
    image(baseImg,   mouseX, mouseY, 100, 100);
    noTint();
  }
}
