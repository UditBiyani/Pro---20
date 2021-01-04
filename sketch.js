var car, wall;
var speed, weight;
var deformation;

function setup() {
  createCanvas(800,400);
  

  car = createSprite(200,canvas.height/2,20,20);
  

  wall = createSprite(750,canvas.height/2,20,200);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  
  car.velocityX = speed/2;
}

function draw() {
  background("black");  
  

  if(Touching(car,wall)){
  //   text("Touching",500,500);
  

  deformation = (0.5 * weight * speed * speed)/22500;
  car.velocityX = 0;
  car.velocityY = 0;
  

  if(deformation < 80){
    car.shapeColor = "yellow";
    wall.shapeColor = "yellow";
   }
  

  if(deformation > 80 && deformation < 180){
    car.shapeColor = "green";
    wall.shapeColor = "green";
   }

   if(deformation > 180){
    car.shapeColor = "red";
    wall.shapeColor = "red";
   }
  }
  

  console.log("d"+deformation);

  
  drawSprites();
}

