const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight

function setup() {
  createCanvas(800,480);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  divisionHeight = 300;

  ground = new Ground(385,460,810,20)

  border1 = new Border(440,475,900,15)
  border2 = new Border(5,10,10,920)
  border3 = new Border(795,10,10,920)
  border4 = new Border(440,5,900,15)

  for(var i = 0; i <=width;i = i + 80){
    divisions.push(new Divisions(i, height-divisionHeight/2,10,divisionHeight))
  }

  for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j = 15;j <=width-10; j = j + 50){
    plinkos.push(new Plinko(j,175))
  }

  //)
  
}

function draw() {
  background(0,0,0);  

  ground.display()

  border1.display()
  border2.display()
  border3.display()
  border4.display()

  for(var i = 0; i < divisions.length;i++){
    divisions[i].display()
  }

  for (var j = 0;j < particles.length; j++){
    particles[j].display();
  }

  for (var i = 0;i < plinkos.length;i++){
    plinkos[i].display()
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-400,width/2+400),10,10))
  }
  

  drawSprites();
}