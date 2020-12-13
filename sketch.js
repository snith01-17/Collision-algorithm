var rect1,rect2;


function setup() {
 createCanvas(800,400);
 rect1 = createSprite(200, 200, 50, 80);
 rect1.shapeColor = "green";

 rect2 = createSprite(400,200,80,30);
 rect2.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  console.log(rect1.x - rect2.x);
  //console.log(rect1.widht/2 + rect2.widht/2);

  //making the rectangle move with mouse
  rect1.y = World.mouseY;
  rect1.x = World.mouseX;
  

  if(rect1.x - rect2.x < rect1.width/2 + rect2.width/2 
    && rect2.x - rect1.x <rect1.width/2 + rect2.width/2 && rect1.y - rect2.y < rect1.height/2 + rect2.height/2 
    && rect2.y - rect1.y <rect1.height/2 + rect2.height/2 ){
   rect1.shapeColor = "blue";
   rect2.shapeColor = "blue";

  }
   else {
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";

   }


  drawSprites();
}