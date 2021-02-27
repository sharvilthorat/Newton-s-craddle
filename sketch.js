
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4;
var ground;
var bodyDiameter=40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1=new Bob(400,400,20,20)
bob2=new Bob(400,400,20,20)

bob3=new Bob(400,400,20,20)
bob4=new Bob(400,400,20,20)
ground=new Roof(400,150,600,30)
chain1=new Chain (bob1.body,ground.body,-20*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  ground.display();
  chain1.diaply();
  
  drawSprites();
 
}



