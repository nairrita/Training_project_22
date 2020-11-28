const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies

var engine,world

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  var ground_options = {
    isStatic:true
  }

  var obj1_options = {
    isStatic:true,
    //restitution:0.8
  }
  ground = Bodies.rectangle(400,380,800,20,ground_options)
  obs1 = Bodies.rectangle(200,320,50,100,ground_options)
  obs2 = Bodies.rectangle(500,270,50,200,ground_options)
  obj1 = Bodies.rectangle(50,200,20,20,obj1_options)
  World.add(world,obj1)
  World.add(world,ground) 
  World.add(world,obs1)
  World.add(world,obs2)
 
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  rect(obj1.position.x,obj1.position.y,20,20)

  rect(obs1.position.x,obs1.position.y,50,100)
  rect(obs2.position.x,obs2.position.y,50,200)
  if(keyDown(DOWN_ARROW)){
    Matter.Body.setStatic(obj1,false)
  }
  if(keyDown(RIGHT_ARROW)){
    Matter.Body.setVelocity(obj1,{x:3,y:-3})
    
  }
}

