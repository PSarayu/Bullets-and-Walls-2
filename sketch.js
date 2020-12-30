var bullet,thickness,wall,speed,weight,BulletReset=false;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 15, 5);
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  thickness = random(22,83);
  speed=random(123,221);
  weight=random(30,52); 
}

function draw() 
{
  background("black");  
  bullet.velocityX=speed;  

  /*console.log(bullet.width)
  console.log(bullet.height)
  console.log(wall.width)
  console.log(wall.height)
  console.log(bullet.x)
  console.log(wall.x)*/
 console.log(wall.x)

  if(bullet.x>1150)
  {
    
    bullet.velocityX=0
    BulletReset=true
    
  }

 /* if (bullet.x - wall.x < wall.width/2 + bullet.width/2
    && wall.x - bullet.x < wall.width/2 + bullet.width/2
    && bullet.y - wall.y < wall.height/2 + bullet.height/2
    && wall.y - bullet.y < wall.height/2 + bullet.height/2) {
      console.log("Return value True")
   return true
}
else {
  console.log("Return value False ")
  return false
}*/

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
    {
      bullet.shapeColor=color(255,0,0);
    } 
    if(damage<10)
    {
     bullet.shapeColor=color(0,255,0);
    }   
    if(BulletReset===true)
    {
      bullet.x=1150;
    }
  }
  drawSprites();
}