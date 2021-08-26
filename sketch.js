var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect= createSprite(400, 200, 50, 80);
  fixedRect= createSprite(400,200,80,50);
}

function draw() {
  background(255,255,255);  
  movingRect.y= World.mouseY;
  movingRect.x=World.mouseX;
  movingRect.shapeColor= "green";
  fixedRect.shapeColor="green";

  movingRect.debug=true;
  fixedRect.debug=true;

  console.log(movingRect.x);
  console.log(fixedRect.x);

  if(movingRect.x - fixedRect.x < (fixedRect.width + movingRect.width)/2 &&
  fixedRect.x - movingRect.x < (fixedRect.width + movingRect.width)/2 &&
  movingRect.y - fixedRect.y < (fixedRect.height + movingRect.height)/2 &&
  fixedRect.y - movingRect.y < (fixedRect.height + movingRect.height)/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }

  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  
 drawSprites();

}