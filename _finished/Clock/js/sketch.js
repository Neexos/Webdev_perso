let diam = 300;
let r = diam/2;
let angle = 0;


function setup(){
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  stroke(255);
  fill(255);

  let hr = hour();
  let mn = minute();
  let sc = second();
  let zero_x = -height/2;
  let zero_y = width/2;

  noFill();
  rotate(-90);

  stroke(0);
  strokeWeight(8);
  arc(zero_x, zero_y, diam+40, diam+40, 0, map(sc, 0, 60, 0, 360));

  stroke(0, 255, 0);
  strokeWeight(6);
  arc(zero_x, zero_y, diam+40, diam+40, 0, map(sc, 0, 60, 0, 360));

  stroke(0);
  strokeWeight(8);
  noFill();
  arc(zero_x, zero_y, diam+20, diam+20, 0, map(mn, 0, 60, 0, 360));

  stroke(255, 255, 0);
  strokeWeight(6);
  arc(zero_x, zero_y, diam+20, diam+20, 0, map(mn, 0, 60, 0, 360));

  stroke(0);
  strokeWeight(8);
  noFill();
  arc(zero_x, zero_y, diam, diam, 0, map(hr, 0, 12, 0, 360));

  stroke(255, 0, 0);
  strokeWeight(6);
  arc(zero_x, zero_y, diam, diam, 0, map(hr, 0, 12, 0, 360));



  rotate(90);
  strokeWeight(1);
  fill(255);
  stroke(255)

//

  for (let i = 0; i < 13*5; i++){
    stroke(0);
    if (angle%30 == 0){
      ellipse(width/2 + (r + 30) * cos(angle), height/2 - (r + 30) * sin(angle), 8, 8);
      angle += (30/5);
    }
    ellipse(width/2 + (r + 30) * cos(angle), height/2 - (r + 30) * sin(angle), 3, 3);
    angle += (30/5);
  }

  strokeWeight(5);
  textAlign(CENTER,CENTER);
  stroke(255);
  fill(0);
  textSize(55);
  text(hr + ' : ' + mn, width/2, height/2);




}
