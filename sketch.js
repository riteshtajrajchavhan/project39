var gameState="serve";
var play = 1;
var end = 0;

function preload(){
cloudImg=loadImage("clouds.png");
backImg=loadImage("back.png");
playerImg=loadImage("player2.png");
ballImg=loadImage("fire.png");
enemyImg=loadImage("enemy1.png");
enemyImg2=loadImage("enemy2.png");
back2=loadImage("game.png");
startImg=loadImage("start.png");
}


function setup() {
 createCanvas(1350,650);
  
 back=createSprite(785,245);
back.addImage(backImg);
 back.scale=4.7
back.velocityX=-7;

player=createSprite(295,445);
player.addImage(playerImg);
 player.scale=0.7

 start=createSprite(680,475,150,150);
 


 health=createSprite(55,20,100,20);
 health.shapeColor="lightgreen";

 


 ballGroup = new Group();
 enemyGroup1 = new Group();
 enemyGroup2 = new Group();
 enemyGroup3 = new Group();
 enemyGroup4 = new Group();

}

function draw() {
  background("lightblue");

if(gameState === "serve"){
background(startImg);

back.visible=false;
player.visible=false;
health.visible=false;
start.visible=false;

if(mousePressedOver(start)){
  gameState=play;
}


}


else if(gameState === play){

  back.visible=true;
player.visible=true;
health.visible=true;
 

 if (back.x < 550){
  back.x = 750;
}

if (keyDown(RIGHT_ARROW)) {
  player.x=player.x+4;   
   }
     
 if (keyDown(LEFT_ARROW)) {
  player.x=player.x-4;   
   } 
   
 if (keyDown(UP_ARROW)) {
  player.y=player.y-10;   
   }  
   
  if (keyDown(DOWN_ARROW)) {
  player.y=player.y+10;   
   } 
     
   if(ballGroup.isTouching(enemyGroup1)){
    ballGroup.destroyEach();
    enemyGroup1.destroyEach();
   }

   if(ballGroup.isTouching(enemyGroup2)){
    ballGroup.destroyEach();
    enemyGroup2.destroyEach();
   }

   if(ballGroup.isTouching(enemyGroup3)){
    ballGroup.destroyEach();
    enemyGroup3.destroyEach();
   }

   if(ballGroup.isTouching(enemyGroup4)){
    ballGroup.destroyEach();
    enemyGroup4.destroyEach();
   }

   if(enemyGroup1.isTouching(player)){
    health.width=health.width-10;
    enemyGroup1.destroyEach();
   }

   if(enemyGroup2.isTouching(player)){
    health.width=health.width-10;
    enemyGroup2.destroyEach();
   }

   if(enemyGroup3.isTouching(player)){
    health.width=health.width-10;
    enemyGroup3.destroyEach();
   }

   if(enemyGroup4.isTouching(player)){
    health.width=health.width-10;
    enemyGroup4.destroyEach();
   }

if(health.width === 10){
  gameState=end
}



 spawnClouds1();
 spawnClouds2();
 spawnClouds3();
 spawnClouds4();

 

 if(keyDown("space")) {
  fireBall();
}

 }

 else if(gameState === end){
background(back2);
back.visible=false;
player.visible=false;
health.visible=false;
start.visible=false;
enemyGroup1.visible=false;
enemyGroup2.visible=false;
enemyGroup3.visible=false;
enemyGroup4.visible=false;

 }

 drawSprites();

}

function spawnClouds1() {
    //write code here to spawn the clouds
    if (frameCount % 70 === 0) {
      var enemy = createSprite(1250,120,40,10);
      enemy.y = Math.round(random(60,600));
     
      enemy.scale = 0.6;
      enemy.velocityX = -3;
      
      var rand = Math.round(random(1,2));
      switch(rand) {
        case 1: enemy.addImage(enemyImg);
                break;
        case 2: enemy.addImage(enemyImg2);
                break;
        default: break;
      }


      
      enemy.lifetime = 500;
      enemyGroup1.add(enemy);
     
    
     
     
     
     // cloudsGroup.add(cloud);
    }
    
  }
  

function fireBall(){
  ball=createSprite(595,445);
  ball.addImage(ballImg);
   ball.scale=0.1;
   ball.x=player.x;
   ball.y=player.y+80
   ball.velocityX=5;

   ballGroup.add(ball);

}

function spawnClouds2() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var enemy = createSprite(1250,120,40,10);
    enemy.y = Math.round(random(60,600));
   
    enemy.scale = 0.6;
    enemy.velocityX = -3;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: enemy.addImage(enemyImg);
              break;
      case 2: enemy.addImage(enemyImg2);
              break;
      default: break;
    }


    
    enemy.lifetime = 500;
    enemyGroup2.add(enemy);
   
  
   
   
   
   // cloudsGroup.add(cloud);
  }
  
}

function spawnClouds3() {
  //write code here to spawn the clouds
  if (frameCount % 30 === 0) {
    var enemy = createSprite(1250,120,40,10);
    enemy.y = Math.round(random(60,600));
   
    enemy.scale = 0.6;
    enemy.velocityX = -3;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: enemy.addImage(enemyImg);
              break;
      case 2: enemy.addImage(enemyImg2);
              break;
      default: break;
    }


    
    enemy.lifetime = 500;
    enemyGroup3.add(enemy);
   
  
   
   
   
   // cloudsGroup.add(cloud);
  }
  
}

function spawnClouds4() {
  //write code here to spawn the clouds
  if (frameCount % 20 === 0) {
    var enemy = createSprite(1250,120,40,10);
    enemy.y = Math.round(random(60,600));
   
    enemy.scale = 0.6;
    enemy.velocityX = -3;
    
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: enemy.addImage(enemyImg);
              break;
      case 2: enemy.addImage(enemyImg2);
              break;
      default: break;
    }


    
    enemy.lifetime = 500;
    enemyGroup4.add(enemy);
   
  
   
   
   
   // cloudsGroup.add(cloud);
  }
  
}
