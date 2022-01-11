
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ball; 

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new ground (width/2, 670, width, 20);
	leftSide = new ground(1100, 600, 20, 120);

	//crear los cuerpos aquí.
var ball_options={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
}
ball = Bodies.circle (200,100,20, ball_options);
  World.add ( world,ball);

	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {

  background(0);
  
  ellipse (ball.position.x ,ball.position.y, 20);

  if (keyDown("left_arrow")&& ball.y >=100){

  }
  if (keyDown("right_arrow")&& ball.y >=100){

}
  groundObj.display();

  drawSprites();
 
}

function hForce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  
  }
  function vForce()
  {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
  }


