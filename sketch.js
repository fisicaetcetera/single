let sky;
let moon;
let venus;
let rotation = 1;

function preload() {
  sky = loadImage("starmap_4k.jpg");
  moon = loadImage("moonmap1k.png");
  moon2k = loadImage("2k_moon.jpg")
  //venus = loadImage("venus.jpg");
}

function setup() {
  createCanvas(1366, 768, WEBGL);
  background(0);
  //pare = createButton("Pare/Gire");
  //pare.mousePressed(PareOuGire);
}

function draw() {
   background(0);
  push();
   translate(0, 0, 0);
   rotateX(0.401);
   rotateY(-frameCount/3000);
   texture(sky);
   sphere(2000);
  pop();
  push();
  translate(-400, 0, 0);
   rotateY(frameCount/1000);
   //texture(venus);
  texture(moon);
   noStroke();
   sphere(300);
  pop();
  push();
  translate(400, 0, 0);
   rotateY(frameCount/1000);
   //texture(venus);
  texture(moon2k);
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
