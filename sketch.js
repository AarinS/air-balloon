var balloon,balloonImage1,balloonImage2;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI

if(keyDown(RIGHT_ARROW)){
  updateHeight(10,0)
}
if(keyDown(LEFT_ARROW)){
  updateHeight(-10,0)
} 
if(keyDown(DOWN_ARROW)){
  updateHeight(0,+10)
  balloon.addAnimation("balloon",balloonImage2)
  balloon.scale=balloon2.scale+0.01
}
if(keyDown(UP_ARROW)){
 updateHeight(0,-10)
 balloon.addAnimation("balloon",balloonImage2)
 balloon.scale=balloon2.scale-0.01
}
drawSprites();
fill(0);
stroke("white");
textSize(25);
text("**Use arrow keys to move Hot Air Balloon!",40,40);





function updateHeight(x,y){
database.ref('balloon/position').set({
'x': position.x+ x,
'y': position.y+ y
})
}
function readPosition(data){
position=data.val();
balloon2.x = position.x;
balloon2.y= position.y;
}
function showError(){
console.log("An error in writing the database")
}
