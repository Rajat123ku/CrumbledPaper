
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject,paper,paperImage;
var world;

function preload(){
paperImage = loadImage("paper.png");


}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new Paper(300,600,50,70);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  }

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}

