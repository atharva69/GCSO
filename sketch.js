var car,wall,car2;
var speed,speed,weight;
function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  speed2=random(50,95);
  weight=random(400,1500);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/1);
  wall.shapeColor="black"
  car.velocityX=speed;
  car2=createSprite(50,270,50,50);
  car2.velocityX=speed2;
  
}

function draw() {
  background("orange");  
  if(wall.x-car.x<(car.width+wall.width)/2){
     car.velocityX=0;
     var deformation=0.5 * weight * speed * speed/22509
     if(deformation<180){
     car.shapeColor="red"
    }
    if(deformation<180&&deformation>100){
       car.shapeColor="yellow"
    }
    if(deformation<100){
       car.shapeColor="green"
    }
  }
  
  if(wall.x-car2.x<(car2.width+wall.width)/2){
    car2.velocityX=0;
    var deformation=0.5 * weight * speed * speed2/22509
    if(deformation<180){
    car2.shapeColor="red"
   }
   if(deformation<180&&deformation>100){
      car2.shapeColor="yellow"
   }
   if(deformation<100){
      car2.shapeColor="green"
   }
 }

 
  drawSprites();
}