let sky;
let moon;
let rotation = 1;

function preload() {
  sky = loadImage("starmap_4k.jpg");
  moon = loadImage("moonmap1k.jpg");
}

function setup() {
  createCanvas(1366, 768, WEBGL);
  background(0);
  pare = createButton("Pare/Gire");
  pare.mousePressed(PareOuGire);
}

function draw() {
   background(0);
   translate(0, 0, 0);
   rotateY(-frameCount/3000 * rotation);
   texture(sky);
   sphere(3000);
  push();
   rotateY(frameCount/1000 * rotation);
   texture(moon);
   noStroke();
   sphere(300);
  pop();
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
