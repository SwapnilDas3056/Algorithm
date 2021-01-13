var movingRect, fixedRect;

function setup(){
  createCanvas(600,600);
  fixedRect = createSprite(300,300,50,100);
  fixedRect.shapeColor = "blue";

  movingRect = createSprite(100,100,100,50);
  movingRect.shapeColor = "blue";
}

function draw(){
  background("white");

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  isTouching();

  drawSprites();
}

function isTouching(){
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
    && fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2
    && fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
    ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
}