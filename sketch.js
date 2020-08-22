var mrect,rect;
var ground
var tree;
var boy;

function setup() {
  createCanvas(800,400);
  
  ground = createSprite(400,350,800,10);
  ground.shapeColor =  "grey" ;

  tree = new Tree(600,300);
  boy = new Boy(200,350);
}

function draw() {
  background("white"); 


drawSprites();
}
