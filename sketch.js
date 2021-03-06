var rect1body,rect2body,rect3body;
var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    rect1body = Bodies.rectangle(990,670,200,20,{isStatic : true});
	World.add(world,rect1body);

	rect2body = Bodies.rectangle(1090,670,20,120,{isStatic : true});
	World.add(world,rect2body);

	rect3body = Bodies.rectangle(890,670,20,120,{isStatic : true});
	World.add(world,rect3body);

	paper = new Paper(100,670);
	ground = new Ground(400,690,2000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0)

rect(rect1body.position.x,rect1body.position.y,200,20);
rect(rect2body.position.x,rect2body.position.y,20,120);
rect(rect3body.position.x,rect3body.position.y,20,120);





   drawSprites();
   paper.display();
   ground.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position.x,{x:18,y:-18});
	}
}

