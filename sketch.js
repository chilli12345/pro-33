const Engine = Matter.Engine;
const World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;
const Render = Matter.Render;
 
var particle=null;
var plinkos = [];
var divisions=[];
var score=0;
var turn=0;
var gameState ="play";

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });

    Render.run(render);
}
 


function draw() {
  background("black");
  stroke("yellow");
   strokeWeight(5);
   line(10,450,790,450);
   noStroke(); 
   textSize(20)
 text("Score : "+score,20,30);
 text("10",30,550);
 text("50",110,550);
 text("100",180,550);
 text("200",260,550);
 text("500",340,550);
 text("500",420,550);
 text("200",500,550);
 text("100",580,550);
 text("50",670,550);
 text("10",750,550);

  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
 
   if(particle!==null)
   {
     particle.display();

      if(particle.body.position.y>700)
      {
          if(particle.body.position.x>5 && particle.body.position.x<60 || particle.body.position.x>725 && particle.body.position.x<765)
          {
            score=score+10;
            particle=null;
            if(turn>=5)
            {
            gameState="end";
            }
          }
      }
   }
   
  if(particle!==null)
  {
      if(particle.body.position.y>700)
      {
        if(particle.body.position.x>65 && particle.body.position.x<125 || particle.body.position.x>665 && particle.body.position.x<720)
        {
            score=score+50;
            particle=null;
            if(turn>=5)
            {
              gameState="end";
            }
        }
      }
  }
    
    if(particle!==null)
   {
      if(particle.body.position.y>700)
      {
        if(particle.body.position.x>130 && particle.body.position.x<190 || particle.body.position.x>595 && particle.body.position.x<645)
        {
              score=score+100;
              particle=null;
              if(turn>=5)
              {
                gameState="end";
              }
        }
      }
    }
  
  
    if(particle!==null)
    {
      if(particle.body.position.y>700)
      {
          if(particle.body.position.x>210 && particle.body.position.x<270 || particle.body.position.x>480 && particle.body.position.x<540)
          {
                score=score+200;
                particle=null;
                if(turn>=5)
                {
                gameState="end";
                }
          }
      }
    }
    
    
      if(particle!==null)
      {
        if(particle.body.position.y>700)
        {
            if(particle.body.position.x>290 && particle.body.position.x<310 || particle.body.position.x>320 && particle.body.position.x<450)
            {
                  score=score+500;
                  particle=null;
                  if(turn>=5)
                  {
                  gameState="end";
                  }
            }
        }
      }
   
    if(gameState === "end"){
      textSize(30);
      fill("blue");
      text("GAME OVER", 300,300);
    }
}
function mousePressed()
{
  if (gameState !== "end")
  {
    turn=turn+1;
    particle=new Particle(mouseX,10,10,10);
   particle.velocityY=5;
  }
}