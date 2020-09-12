
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,roof1,rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800,700);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(200,500,50);
	ball2 = new Ball(300,500,50);
	ball3 = new Ball(400,500,50);
	ball4 = new Ball(500,500,50);
	ball5 = new Ball(600,500,50);
	roof1 = new Roof(400,150,520,50);
	rope1 = new Rope(roof1,ball1);
	rope2 = new Rope(roof1,ball2);
	rope3 = new Rope(roof1,ball3);
	rope4 = new Rope(roof1,ball4);
	rope5 = new Rope(roof1,ball5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



