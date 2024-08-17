let sky;
let moon;
let moon2k;
let venus;
let rotation = 1;
let CB = [];
let planeta; 
function preload() {
  sky = loadImage("starmap_4k.jpg");
  moon = loadImage("moonmap1k.png");
  moon2k = loadImage("2k_moon.jpg");
  venus = loadImage("venus.jpg");
  pluto = loadImage("pluto.jpg");
  mars = loadimage ("mars.jpg");
  jupiter = loadimage ("jupiter.jpg");
  uranus = loadimage ("uranus.jpg");
  neptune = loadimage ("neptune.jpg");
  mercury = loadimage ("mercury.jpg");
  earth = loadimage ("earthclouds.jpg");
  CB = [moon, moon2k, venus, pluto, mars];
  planeta = random(CB);
}

function setup() {
  createCanvas(1366, 768, WEBGL);
  background(0);
  let p =createP("planeta");
  p.position(0,0);
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
  translate(0, 0, -211);
   rotateY(frameCount/1000);
   texture(planeta);
   noStroke();
   sphere(300);
  pop();
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  planeta = random(CB);
  loop();
}
