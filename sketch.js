var wall;
var car;
var speed;
var weight;
var deformation;

function setup() {
  createCanvas(600,300);
  car = createSprite(20,150,20,20);
  wall = createSprite(580, 150, 25, 100);
  car.shapeColor = "white";
  speed = random(55,90);
  weight = random(4400,1500);
}

function draw() {
  background("black");
  car.velocityX = speed;

  collide();
  drawSprites();
}

function collide(){
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22500;

    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor = color(0,250,0);
    }
  }
}