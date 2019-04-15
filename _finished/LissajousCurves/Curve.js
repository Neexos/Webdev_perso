class Curve {

  constructor() {
    this.path = [];
    this.couleur = [];
    this.current = createVector();
  }

  setX(x){
    this.current.x = x;
    this.couleur.push(x%255);
  }

  setY(y){
    this.current.y = y;
    this.couleur.push(y%255);

  }


  addPoint() {
    this.path.push(this.current);
    this.current = createVector();
  }

  reset() {
    this.path = [];
  }

  show() {
    this.couleur.push(255);
    //console.log(this.couleur);
    stroke(this.couleur[0], this.couleur[1], this.couleur[2]);
    strokeWeight(1);
    noFill();
    beginShape();
    for (let v of this.path){
      vertex(v.x, v.y)
    }
    endShape();

    strokeWeight(8);
    point(this.current.x, this.current.y);
    this.current = new createVector();
  }
}
