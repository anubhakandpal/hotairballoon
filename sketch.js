var balloon,balloonmoving;
var backgroundImg;

function preload(){
	backgroundImg=loadImage("background.png");
	balloonMoving=loadAnimation("hotairballoon1.png","hotairballoon2.png","hotairballoon3.png");
    

}


function setup() {
  createCanvas(1400,500);
  balloon=createSprite(400, 200);
  balloon.addAnimation("balloon",balloonMoving);
  balloon.scale=0.5;
}

function draw() {
  background(backgroundImg);
  textSize(30);
  text("use arrow keys to make the hot air balloon move",20,20); 
 
  balloon.display();

  if (keyDown(LEFT_ARROW)) {
  	balloon.x=balloon.x-10;
  }
  if (keyDown(RIGHT_ARROW)) {
  	balloon.x=balloon.x+10;
  }
  if (keyDown(UP_ARROW)) {
  	
  	balloon.y=balloon.y-10;
  	

  	
  }
   if (keyDown(DOWN_ARROW)) {
  	balloon.y=balloon.y+10;
  }
 
  
  drawSprites();

}
