
function preload(){
  //pre-load images
  track1Img=loadImage("path.png")
  boy1Img=loadImage("Runner-1.png","Runner-2.png");
}



if(track1Img.y > 400){
  track1Img.y = height/2;
}


function setup(){
  createCanvas(400,400);
  //create sprites here
  track1=createSprite(200,200);
  track1.addImage(track1Img);
  track1.velociityY = 4;
  track1.scale = 1.2;

  boy=createSprite(370,200,20,10);
  boy.addImage(boy1Img);
  boy.addAnimation("running",boy_running)
  
}

function draw() {
  background(0);
  drawSprites();
}
