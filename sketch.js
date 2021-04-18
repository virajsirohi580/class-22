const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world= engine.world;
 
  var options = {
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  var options={

restitution: 1.5

  }
  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball);

}

function draw() {
  background("black"); 
  Engine.update(engine); 
  fill ("brown")
  rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
 fill ("yellow")
 ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}