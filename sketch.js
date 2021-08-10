const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var con1;
var con2;
var con3;
var con4;
var con5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options={
isStatic:true,
restitution:0.5,
density:1


	}

	ball1=Bodies.circle(320,340,20,ball_options)
	World.add(world,ball1);

	ball2=Bodies.circle(360,340,20,ball_options)
	World.add(world,ball2);

	ball3=Bodies.circle(400,340,20,ball_options)
	World.add(world,ball3);

	ball4=Bodies.circle(440,340,20,ball_options)
	World.add(world,ball4);

	ball5=Bodies.circle(480,340,20,ball_options)
	World.add(world,ball5);

	con1=Matter.Constraint.create({
pointA:{x:320,y:110},
bodyB:ball1,
length:150,
stiffness: 0.5
	})

	con2=Matter.Constraint.create({
		pointA:{x:360,y:110},
		bodyB:ball2,
		length:150,
		stiffness: 0.5
			})

			con3=Matter.Constraint.create({
				pointA:{x:400,y:110},
				bodyB:ball3,
				length:150,
				stiffness: 0.5
					})

					con4=Matter.Constraint.create({
						pointA:{x:440,y:110},
						bodyB:ball4,
						length:150,
						stiffness: 0.5
							})

							con5=Matter.Constraint.create({
								pointA:{x:480,y:110},
								bodyB:ball5,
								length:150,
								stiffness: 0.5
									})
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
  ellipse(ball5.position.x,ball5.position.y,20);
  rect(roof.position.x,roof.position.y,230,20);

  
  push();
  strokeWeight(2);
  stroke(255);
  line(con1.pointA.x,con1.pointA.y,ball1.position.x,ball1.position.y);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  pop();

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:2,y:0});
    }
}
