var pupilX = 230;
var pupilY = 175;
var eyesX = 230;
var eyesY = 175;
var centerX = 0;
var centerY = 0;

var mapX = 0;
var mapY = 0;

function setup() {
  createCanvas(500,500);
  centerX = width/2;
  centerY = height/2;
  
}

function draw() {
  background (255);
  mapX = map(mouseX, 0, width, -5,5);
  mapY = map(mouseY, 0, height,-5,5);
  
  
  //antena
  strokeWeight (1);
  stroke (255);
  fill (100);
  strokeWeight (1);
  stroke (0);
  ellipse(centerX,110,25,25);
  fill (255);
  ellipse(centerX,110,20,20);
  fill (100);
  rectMode(CENTER)
  rect(centerX,125,15,5,5,5,5,5);
  rect(centerX,125+5,20,5,5,5,5,5);
  rect(centerX,125+10,25,5,5,5,5,5);
  
  //face
  strokeWeight (1);
  stroke (0);
  fill (255,0,0);
  rect(centerX,188,100,90,5,5,5,5);
  rect(centerX,140,100,5,5,5,5,5);
  
  //eyebrow
  strokeWeight (1);
  stroke (0);
  fill (100);
  rect(centerX - 20 ,150 + mapY,20,5,5,5,5,5);
  rect(centerX + 20 ,150 + mapY,20,5,5,5,5,5);
  
  //eyes
  fill (50);
  ellipse(eyesX,eyesY,30,30);
  ellipse(eyesX+40,eyesY,30,30);
  
  //pupils
  fill (255,204,0)
  noStroke ();
  ellipse(pupilX + mapX, pupilY + mapY,20,20);
  ellipse(pupilY + mapX + 95, pupilY + mapY,20,20);
  
  
  // mouth
  fill (200)
  line(centerX-25,centerY-20,centerX+25,centerY-20);
  strokeWeight (4);
  stroke (255, 204, 0);
  rect(centerX,centerY-40,50,20,2,2,2,2);
  
  //teeth
  line(centerX,centerY - 50,centerX ,centerY - 30);
  line(centerX - 13,centerY - 50,centerX - 13 ,centerY - 30);
  line(centerX + 13,centerY - 50,centerX + 13 ,centerY - 30);
  
  
}


