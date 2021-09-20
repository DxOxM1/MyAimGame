function preload(){

circleImg = loadImage("circleobject.png")
rectangleImg = loadImage("rectangleobject.png")




}

function setup() {
  createCanvas(windowWidth, windowHeight);
  edges = createEdgeSprites()
}

function draw() {
  background("grey");
  RedRECTANGLE()
  RectangleObject.bounceOff(edges)
  if(frameCount %40===0){
    RectangleObject.velocityX = random(-20,20)
    RectangleObject.velocityY = random(-10,10)
  }
  drawSprites();
}

function RedRECTANGLE(){
if(frameCount === 1){
RectangleObject = createSprite(random(30,770),random(30,370))
RectangleObject.addImage(rectangleImg)
RectangleObject.velocityX = random(-20,20)
RectangleObject.velocityY = random(-10,10)
RectangleObject.rotation = 90
RectangleObject.scale = 0.3
}
}