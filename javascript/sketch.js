var centX = 400 / 2;
var centY = 400 / 2;
var i;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(120, 180, 255);
  stroke(1);
  strokeWeight(1);

  // for centering the image (more or less)
  // line(centX, 0, centX, height);
  // line(0, centY, width, centY);

  // glasses
  stroke(60);
  line(centX - 20 - 10, centY - 20, centX - 20 - 5, centY - 20 - 10);
  line(centX + 20 + 10, centY - 20, centX + 20 + 15, centY - 20 - 10);

  fill(180, 180, 200);
  ellipse(centX - 20, centY - 20, 20, 17);
  ellipse(centX + 20, centY - 20, 20, 17);

  noFill();
  arc(centX, centY - 21, 10, 8, 180, 360);
  line(centX - 5, centY - 21, centX - 9, centY - 21);
  line(centX + 5, centY - 21, centX + 9, centY - 21);

  // nose
  fill(0);
  ellipse(centX - 3, centY - 5, 3, 2);
  ellipse(centX + 3, centY - 5, 3, 2);

  // mouth
  stroke(0);
  line(centX - 12, centY + 8, centX + 12, centY + 8);

  fill(255, 60, 180, 120);
  arc(centX, centY + 9, 25, 3, 360, 180);

  // teeth
  strokeWeight(1);
  fill(245);
  beginShape();
  vertex(centX - 6, centY + 12 - 4);
  vertex(centX - 6, centY + 16 - 4);
  vertex(centX, centY + 16 - 4);
  vertex(centX, centY + 12 - 4);
  endShape();

  strokeWeight(1);
  fill(245);
  beginShape();
  vertex(centX + 6, centY + 12 - 4);
  vertex(centX + 6, centY + 16 - 4);
  vertex(centX, centY + 16 - 4);
  vertex(centX, centY + 12 - 4);
  endShape();

  // cap
  strokeWeight(2);
  stroke(227, 150, 117);
  for (i = 173; i < 235; i += 3) {
    line(i, 150, i + 5, 140);
  }

  strokeWeight(1);
  stroke(0);
  line(centX - 20 - 10, centY - 50, centX - 20 - 4, centY - 50 - 10);
  line(centX + 20 + 10 + 5, centY - 50, centX + 20 + 14 + 5, centY - 50 - 10);
  fill(227, 150, 117);
  arc(centX + 5 + 2.5, centY - 60, 60 + 2.5, 60, 180, 360);
  arc(centX + 2.5, centY - 50, 60 + 2.5, 20, 180, 360);

  // shirt
  fill(30, 90, 60);
  arc(centX, centY + 50, 150, 30, 180, 360);

  fill(30 / 3, 90 / 3, 60 / 3);
  arc(centX, centY + 36, 50, 10, 360, 180);
}
