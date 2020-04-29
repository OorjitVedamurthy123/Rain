const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
let rains = [];



function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    
    for (let i = 100; i < 1200; i=i+10) {
        rains[i]=new Rain();
        
      }
}

function draw(){
    background("lightblue");
    for (let i = 100; i < 1200; i=i+10) {
        
        rains[i].display();
        
      }
     
    Engine.update(engine);
    
    
    
   
}

