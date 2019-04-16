function make2DArray(rows, cols){
  var arr = new Array(rows);
  for(i = 0; i < arr.length; i++){
    arr[i] = new Array(cols);
  }
  return arr;
}


let col;
let row;
let w = 80;


let angle = 0;
let speed = 1;
let curves;

function setup() {
  createCanvas(800,800);
  col = floor(width/w) - 1;
  row = floor(height/w) - 1;
  curves = make2DArray(row, col);

  for(let j = 0; j < row; j++){
    for(let i = 0; i < col; i++){
      curves[j][i] = new Curve();
    }
  }

}

function draw() {
  background(0);
  let diam = w - 0.2 * w;
  let r = diam/2;

  noFill();
  stroke(255);
  //Ligne de cercles du haut
  for(let i = 0; i < col; i++){


    let cx = w + i * w + w/2;
    let cy = w/2;
    strokeWeight(1);
    ellipse(cx, cy, diam, diam);

    let x = r * cos(angle * (i + 1) - HALF_PI);
    let y = r * sin(angle * (i + 1) - HALF_PI);
    strokeWeight(6);
    stroke(255);
    point(cx+x, cy+y);
    stroke(255, 150);
    strokeWeight(1);
    line(cx+x, 0, cx+x, 800);

    for(let j = 0; j < row; j++){
      curves[j][i].setX(cx + x);

    }
  }

  noFill();
  stroke(255);
  //Colonne de cercles de gauche
  for(let j = 0; j < row; j++){
    let cx = w/2;
    let cy = w + j * w + w/2;
    strokeWeight(1);
    stroke(255);
    ellipse(cx, cy, diam, diam);

    let x = r * cos(angle * (j + 1) - HALF_PI);
    let y = r * sin(angle * (j + 1) - HALF_PI);
    strokeWeight(6);
    stroke(255);
    point(cx+x, cy+y);
    stroke(255, 150);
    strokeWeight(1);
    line(0, cy+y, width, cy+y);

    for(let i = 0; i < col; i++){
      curves[j][i].setY(cy + y);
    }
  }

  for(let j = 0; j < row; j++){
    for(let i = 0; i < col; i++){
      curves[j][i].addPoint();
      curves[j][i].show();
    }
  }
  angle -= 0.01;

  if(angle < -TWO_PI){
    for (let j = 0; j < row; j++){
      for (let i = 0; i < col; i++){
        curves[j][i].reset();
      }
    }
    angle = 0;
  }
}
