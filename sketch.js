const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var ground_option = {
        isStatic : true
    }
    
    var ball_option = {
        restitution : 1.0 
    }

    
    ground = Bodies.rectangle(200,390,200,20,ground_option);
    World.add(world,ground);

    ball = Bodies.circle(200,0,6,ball_option);
    World.add(world,ball);
    

    console.log(ball.position.x);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    circle(ball.position.x,ball.position.y,50);
}