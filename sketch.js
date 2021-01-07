
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
var paperObject, ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	paperObject = new Paper(300, 500, 1, 5, 1.5);

	dustbin = new Dustbin(400, 640 );

	ground = new Ground(350, 700, 980, 20);



	Engine.run(engine);


}


function draw() {
	rectMode(CENTER);
	background("grey");

	ground.display();
	dustbin.display();
	paperObject.display();

}

function keyPressed() {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, { x: 85, y: -85 });

	}

}


