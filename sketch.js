
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer
var iron
var rubberBody

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(10,100)
ground=new Ground(400,680,800,20)
iron=new Iron(60,60)
rubberBody=new RubberBody(20,40)
stone=new Stone(50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  iron.display();
  rubberBody.display();
  ground.display()
stone.display();
  drawSprites();
 
}

