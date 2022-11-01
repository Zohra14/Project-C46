var bg
var bgImg
var girl,girlImg
var rock,rockImg

function preload() {
bgImg = loadImage ("bg.png")
girlImg = loadAnimation ("girl1.png","girl2.png","girl4.png","girl5.png")
rockImg = loadImage ("rock.jpg")
}

function setup() {
  createCanvas(800, 600);

  bg = createSprite (250,250,1500,500);
  bg.addImage ("background",bgImg)
  bg.scale = 2.5
  bg.x = bg.width/1.5;

  girl = createSprite (100,450,30,30)
  girl.addAnimation ("runner",girlImg)
  girl.scale =0.5

  rock = createSprite (600,550,30,30)
  rock.addImage ("rock",rockImg)
}

function draw() {
  background("black");
  bg.velocityX= -4

  //To reset the background
  if (bg.x < 0) {
   bg.x = bg.width /1.5
  } 


  


  drawSprites();
} 

 

