
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject,dustbinObjImage;
var world;
var paper;


function preload(){
	this.image=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 400);
	rectMode(CENTER);



	

	engine = Engine.create();
	world = engine.world;

	groundObject = new ground(width / 2, 370, width, 20);
	dustbinObj = new dustbin(600, 350);
	paper = new Paper(200, 250, 70);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(230);
	keyPressed();
	
	groundObject.display();
	dustbinObj.display();
	paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 100, y: -100 });


	}
}
