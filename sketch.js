let sky;
let moon;
let moon2k;
let venus;
let rotation = 1;
let CB = [];
let planeta; 
let text = "";
function preload() {
  sky = loadImage("starmap_4k.jpg");
  moon = loadImage("moonmap1k.png");
  moon2k = loadImage("2k_moon.jpg");
  venus = loadImage("venus.jpg");
  pluto = loadImage("pluto.jpg");
  mars = loadImage ("mars.jpg");
  jupiter = loadImage ("jupiter.jpg");
  uranus = loadImage ("uranus.jpg");
  neptune = loadImage ("neptune.jpg");
  mercury = loadImage ("mercury.jpg");
  sun = loadImage ("2k_sun.jpg");
  earth = loadImage ("earthcloud.jpg");
  sharon= loadImage ("sharon.jpg");
  europa = loadImage("europa.jpg");
  saturn = loadImage("saturn.jpg");
  jupiter1 = loadImage("jupiter1.jpg");
  CB = [moon2k,venus,pluto,mars,earth,jupiter,uranus,neptune,mercury,sun,sharon];
  CB.push(europa, saturn, jupiter1);
  planeta = random(CB);
}
function setup() {
  createCanvas(1366, 768, WEBGL);
  background(0);
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
   angulo = frameCount/1000 - count * Math.PI;
   rotateY(angulo);
   texture(planeta);
   noStroke();
   sphere(300);
   if(angulo > 6.28){
     planeta = random(CB);
     count++;
   }
  pop();
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  planeta = random(CB);
  loop();
}
