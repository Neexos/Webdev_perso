var bricks = [];
var brickWidth = 50;
var brickHeight = 20;
var player;
var ball;
var nbCols, nbRows;

function preload() {
  // specify width and height of each frame and number of frames
  sprite_sheet = loadAnimation('./img/spriteSheets/Breakout Tile Set Free/PNG/50-Breakout-Tiles.png', './img/spriteSheets/Breakout Tile Set Free/PNG/51-Breakout-Tiles.png','./img/spriteSheets/Breakout Tile Set Free/PNG/52-Breakout-Tiles.png');

}



function setup() {
  createCanvas(window.innerWidth, window.innerHeight-3);

  stroke(255, 0, 255);

  var nbCols = width/brickWidth;
  var nbRows = (height/2)/brickHeight;


  for (let j = 0; j < nbRows; j++){
    for (let i = 0; i < nbCols; i++){
      bricks[i] = new Brick(i, j);
    }
  }


}



function draw() {
  clear();
  background(0);
  animation(sprite_sheet, mouseX, height);
  for (let i = 0; i < bricks.length; i++){
    bricks[i].show();
  }
  //clear(); //efface la "sprite" précédente

}
