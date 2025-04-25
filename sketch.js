// ------------ configuration -------------
const BRUSH_SIZE = 100;          // regular size
const BRUSH_ALPHA = 127;         // 0-255  (127 ≈ 50 % opacity)

// ------------ globals -------------------
let baseImg, rainbowImg;

// ------------ p5 lifecycle --------------
function preload() {
    baseImg    = loadImage('./assets/schoolgirl.png');  // ⬅️ added “assets/”
    rainbowImg = loadImage('./assets/rainbow.png');     // ⬅️ added “assets/”
  }

function setup() {
  // A. full-window transparent canvas -----------------
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);             // NOT “CaretPosition”
  cnv.style('position', 'absolute');
  cnv.style('z-index', '-2');     // sit *under* your HTML; use '2' if you prefer it on top
  background(0, 0, 0, 0);         // transparent
  imageMode(CENTER);

  // optional: keep headings clickable even if canvas is on top
  // cnv.style('pointer-events', 'none');
}

function draw() {
  if (mouseIsPressed) {
    image(rainbowImg, mouseX, mouseY, BRUSH_SIZE, BRUSH_SIZE);
  } else {
    tint(255, BRUSH_ALPHA);
    image(baseImg, mouseX, mouseY, BRUSH_SIZE, BRUSH_SIZE);
    noTint();
  }
}

// B. keep canvas full-screen after resizing -----------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
