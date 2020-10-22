const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pig1,pig2;
var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,360,70,70);
    box2 = new Box(920,360,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(810,350,50,50);
    log1=new Log(820,320,350,20,PI);
    log2=new Log(820,220,350,20,PI);
    log3=new Log(850,130,175,20,PI/8);
    log4=new Log(810,130,175,20,-PI/8);
    box3 = new Box(920,270,70,70);
    box4 = new Box(700,270,70,70);
    box5 = new Box(810,170,70,70);
    pig2=new Pig(810,250,50,50);
    bird=new Bird(50,200,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    box2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}