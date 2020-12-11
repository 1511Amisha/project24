
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var side1,side2,side3;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper= new Paper(100, 600, 10);
	side1=new Dustbin(550, 620, 20, 100);
	side2=new Dustbin(635, 660, 150, 20);
	side3=new Dustbin(720, 620, 20, 100);
	ground=new Ground(790,10,800,20);


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  side1.display();
  side2.display();
  side3.display();
  ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:15, y: -15})
	}

  }




