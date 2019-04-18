// ' ' = ground | '#' = wall | '.' = goal | '$' = crates | '@' = player | '*' = crate on goal
var chooseLvl = 0;

var lvl_length = [];
var wall_index = [];
var ground_index = [];
var goal_index = [];
var crate_index = [];
var player_index = [];

var wallImg;
var groundImg;
var goalImg;
var crateImg;

var txt;

function preload() {
  txt = loadStrings('./lvl/12_blocks.txt', function(){
    for (var i = 0; i < txt.length; i++){
      var wallTmp = [];
      var gndTmp = [];
      var goalTmp = [];
      var crateTmp = [];
      for (var j = 0; j < txt[i].length; j++){
        var c = txt[i][j];
        switch (c) {
          case ';':
            lvl_length.push(i);
            break;
          case '#':
            gndTmp.push([i, j]);
            wallTmp.push([i, j]);
            break;
          case ' ':
            gndTmp.push([i, j]);
            break;
          case '.':
            gndTmp.push([i, j]);
            goalTmp.push([i, j]);
            break;
          case '$':
            gndTmp.push([i, j]);
            crateTmp.push([i, j]);
            break;
          case '*':
            gndTmp.push([i, j]);
            goalTmp.push([i, j]);
            crateTmp.push([i, j]);
            break;
          case '@':
            player_index.push([i, j]);
            break;
        }
      }
      wall_index.push(wallTmp);
      ground_index.push(gndTmp);
      goal_index.push(goalTmp);
      crate_index.push(crateTmp);
    }
  });

  console.log(wall_index, ground_index);


  while (!(chooseLvl > 0)){
    chooseLvl = window.prompt('Entrez le numéro de niveau', 1);
  }
  wallImg = loadImage('./img/kenney_sokobanpack/PNG/Default size/Blocks/block_02.png');
  groundImg = loadImage('./img/kenney_sokobanpack/PNG/Default size/Ground/ground_05.png');
  goalImg = loadImage('./img/kenney_sokobanpack/PNG/Default size/Environment/environment_05.png');
  crateImg = loadImage('./img/kenney_sokobanpack/PNG/Default size/Crates/crate_02.png');
}

function setup() {
  createCanvas(2000, 2*2000);
  background(51);

  console.log(lvl_length[chooseLvl-1]*groundImg.height);
}

function draw() {
  fill(255);
  textSize(10);
  //textAlign(CENTER, CENTER);

  translate(0, -lvl_length[chooseLvl-2]*groundImg.height || 0);


  for (var j = lvl_length[chooseLvl-2] || 0; j < lvl_length[chooseLvl-1]; j++){
    for (var element of ground_index[j]){
      if (wall_index[j][0] && element[1] >= wall_index[j][0][1] ){
        image(groundImg, element[1]*groundImg.width, element[0]*groundImg.height);
      }
    }
    for (var element of wall_index[j]){
      image(wallImg, element[1]*wallImg.width, element[0]*wallImg.height);
    }
    for (var element of goal_index[j]){
      image(goalImg, element[1]*goalImg.width, element[0]*goalImg.height);
    }
    for (var element of crate_index[j]){
      image(crateImg, element[1]*crateImg.width, element[0]*crateImg.height);
    }
  }
  stroke(255,0,0);
  textSize(40);
  text('LEVEL ' + chooseLvl, 0, 40+lvl_length[chooseLvl-2]*groundImg.height || 40);
}
