
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
angle1=60;
angle2=90;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
   var groundOptions ={
      isStatic: true
    };
	
	//Create the Bodies Here.

   ground=Bodies.rectangle(200,380,400,20,groundOptions);
   World.add(world,ground);
   rectblock1=Bodies.rectangle(90,300,100,10,groundOptions);
   World.add(world,rectblock1);
   rectblock2=Bodies.rectangle(290,100,100,10,groundOptions);
   World.add(world,rectblock2);
   
   var ball_options = {
      restitution: 0.95,
      frictionAir:0.01
    }
  
   
    ball1 = Bodies.circle(260,100,10,ball_options);
	World.add(world,ball1);
   ball2 = Bodies.circle(190,100,10,ball_options);
	World.add(world,ball2);
   ball3 = Bodies.circle(220,100,10,ball_options);
	World.add(world,ball3);
   ball4 = Bodies.circle(200,100,10,ball_options);
	World.add(world,ball4);

   var ops={
      isStatic:true
   }
   wedge1=Bodies.rectangle(200,200,150,20,ops);
   World.add(world,wedge1);
   wedge2=Bodies.rectangle(210,200,150,20,ops);
   World.add(world,wedge2);

	//Engine.run(engine);
	

}


function draw() {

  background("white");
  rectMode(CENTER);
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);

  rect(ground.position.x,ground.position.y,400,20,)
  rect(rectblock1.position.x,rectblock1.position.y,100,20);
  rect(rectblock2.position.x,rectblock2.position.y,100,20);

  Matter.Body.rotate(wedge2,90);
  push();
  translate(wedge2.position.x,wedge2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();

  angle2+=2
  Matter.Body.rotate(wedge1,60);
  push();
  translate(wedge1.position.x,wedge1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();

  angle1+=1


   drawSprites();
 
}



