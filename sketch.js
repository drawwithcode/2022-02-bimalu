function preload() {
	// put preload code here
}

let myParticleExplosion = [];
const colorList = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i > 1; i++) {
    addSpark();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background("#000040");

  for (let i = 0; i < myParticleExplosion.length; i++) {
    myParticleExplosion[i].run();
  }
}

function mouseDragged() {
  addSpark();
}

function addSpark() {
  let sparkColor1 = random(colorList);
  let sparkColor2 = random(colorList);
  const sparkGradient = lerpColor(color(sparkColor1), color(sparkColor2), 0.4);
  const newSpark = new Spark(
    width / 2,
    height / 2,
    random(width),
    random(height),
    random(1, 15),
    sparkGradient
  );
  myParticleExplosion.push(newSpark);
}

class Spark {
  constructor(temp_x1, temp_y1, temp_x2, temp_y2, temp_stroke, temp_color) {
    this.x1 = temp_x1;
    this.y1 = temp_y1;
    this.x2 = temp_x2;
    this.y2 = temp_y2;
    this.stroke = temp_stroke;
    this.color = temp_color;
  }

  show() {
    push();
    stroke(this.color);
    strokeWeight(this.stroke);
    noFill();
    line(this.x1, this.y1, this.x2, this.y2);
    pop();
  }

  run() {
    this.show();
  }
}
