var canvas, BackgroundImage;

var gameState = 0;
var playerCount;
var allplayer;
var database;

var form, player ,game;
var cars,car1,car2,car3,car4;

function setup(){
  canvas = createCanvas(displayWidth -20,displayHieght-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    game.play();
  }
}