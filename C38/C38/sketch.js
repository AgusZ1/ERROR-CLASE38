var database
var  playerCount = 0
var gameState = 0
var form1
var game1
var player1
var allplayers



function setup(){
  createCanvas(windowWidth,windowHeight)
  database = firebase.database()
  game1 = new Game();
  game1.gameState();
  game1.start();
  
}

function draw(){
  background("white");
  if(playerCount === 4 ){
    game1.update(1)
  }
  if(gameState === 1){
    game1.play()
  }
  
 
}



  




