let numbers = [true];
let count = 1;
let sequence = [];
let index = 0;


let arcs =[];
let biggest = [0,0];
let zoom = 1;

class Arc {
  constructor(start, end, dir){
    this.start = start;
    this.end = end;
    this.dir = dir;
  }

  show(){

    let diam = abs(this.end - this.start);
    let x = abs(this.end + this.start) / 2;
    if (this.dir == 0){
      stroke(0,255,255);
      arc(x, 0, diam, diam, PI, 0);
    } else {
      stroke(255,255,0);
      arc(x, 0, diam, diam, 0, PI);
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight-50);
  numbers[index] = true;
  sequence.push(index);
}

function step(){
  let next = index - count;
  if (next < 0 || numbers[next]){
    next = index + count;
  }
  numbers[next] = true;
  sequence.push(next);

  let a = new Arc(index, next, count%2);
  arcs.push(a);

  index = next;
  if (index > biggest[1]){
    append(biggest, index);
    biggest.splice(0, 1);
  }
  zoom = lerp(biggest[0], biggest[1], 0.2);
  count++;
}

function draw() {
  noFill();
  step();
  translate(0, height / 2);
  scale(width / zoom);

  background(0);

  for(let a of arcs){
    a.show();
  }
}
