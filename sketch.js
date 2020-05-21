const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var dustbin1,dustbin2
var ground1

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,700,1000,20);

	Engine.run(engine);
  
	 dustbin1 = new Dustbin(390,300,70,PI);
	 dustbin2 = new Dustbin(610,300,70,-PI);
	

	 var ball_options ={
        isStatic:true
    }

    ball = Bodies.circle(200,600,20, ball_options);
    World.add(world,ball); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	text(mouseX + "," + mouseY,10,15);

	dustbin1.display();
	dustbin2.display();
	ground1.display();

	fill("green")
	rect(500,680,200,20);

	fill("white");
	ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
  
}