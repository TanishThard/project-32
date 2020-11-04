const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var base1,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,
    box11,box12,box13,box14,box15,box16,box17,box18,box19,
    box20,box21,box22,box23,box24,box25;
var polygon;
var slingShot;
var score = 0;

function setup() {
  createCanvas(1500,400);
 
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(750,height,1500,20);
  base1 = new Ground(390,300,230,10);
  base2 = new Ground(985,140,180,10);
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);
  box17 = new Box(920,120,30,40);
  box18 = new Box(950,120,30,40);
  box19 = new Box(980,120,30,40);
  box20 = new Box(1010,120,30,40);
  box21 = new Box(1040,120,30,40);
  box22 = new Box(950,80,30,40);
  box23 = new Box(980,80,30,40);
  box24 = new Box(1010,80,30,40);
  box25 = new Box(980,40,30,40);
  polygon = new Polygon(200,20,40,40);
  slingShot= new SlingShot(polygon.body,{x:200,y:100});


  Engine.run(engine);
  
}

function draw() {
  background(255,255,255);  
  textSize(20);
  fill("black");
  text("Drag the polygon to destroy the blocks",300,30);
  text("SCORE : "+score,750,40);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  Engine.update(engine);

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  base1.display(); 
  base2.display();
  polygon.display();
  slingShot.display()
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
  
  slingShot.fly();
  
  }
  
  function keyPressed(){
    if(keyCode === 32){
      slingShot.attach(polygon.body);
    }
}
