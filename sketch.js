var database;
var gameState;
var playerCount;
var player, form, game;

function setup(){
  database = firebase.database();
  createCanvas(500,500);

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
  
}
