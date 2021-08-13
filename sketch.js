var bg,astronaut
var bgI,bath,brush,drink,eat,gym1,gym2,move,sleep

function preload(){
  bgI = loadImage("iss.png")
  bath = loadAnimation("bath1.png","bath2.png")
  brush = loadAnimation("brush.png")
  drink = loadAnimation("drink1.png","drink2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  gym1 = loadAnimation("gym1.png","gym2.png")
  gym2 = loadAnimation("gym11.png","gym12.png")
  move = loadAnimation("move.png","move1.png")
  sleep = loadAnimation("sleep.png")
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 50, 50);
  bg.addImage(bgI)
  bg.scale = 0.2
  wall1 = createSprite(120,200,10,400)
  wall2 = createSprite(720,200,10,400)
  wall1.visible = false
  wall2.visible = false
  astronaut = createSprite(400,200)

  astronaut.addAnimation("bed",sleep)
  astronaut.debug = true
  astronaut.scale = 0.1
}

function draw() {
  background("grey");  
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 25);
  textSize(12);
  text("Up Arrow = Brushing",20, 45);
  text("Down Arrow = Exercising",20, 60);
  text("Left Arrow = Eating",20, 75);
  text("Right Arrow = Bathing",20, 90);
  text("m key = Moving",20, 105);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("exercise", gym1);
    astronaut.changeAnimation("exercise");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 400;
    astronaut.y = 200;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }
}