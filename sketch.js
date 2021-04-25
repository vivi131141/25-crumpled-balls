
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paper1,paper,paperImg
var world;

function preload(){
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	groundObject=new ground(width/2,670,width,20);

	paper1 = new Paper(250,540,10,10);

	paper=createSprite(250,540, 10,10);
	paper.addImage(paperImg)

		
	dustbinObj=new dustbin(1200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paper1.display();
  dustbinObj.display();

//   paper.x= paper1.position.x
//   paper.y= paper1.position.y

}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10, y: -6})
  }
}