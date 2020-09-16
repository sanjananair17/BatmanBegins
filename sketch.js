const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var umbrella;
var drops = [];
var maxDrops = 100;

function preload(){
    
}

function setup(){
   createCanvas(500, 650);
   engine = Engine.create();
   world  = engine.world;
    
   umbrella = new Umbrella(100,350, 50);

   if(frameCount%100===0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400), 5));
        }
    }
}

function draw(){
    background(0);

    umbrella.display();

    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
      }

    drawSprites();    
}