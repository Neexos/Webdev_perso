  function Blob(x, y, r, c){
  this.pos = createVector(x, y);
  this.r = r;
  this.speed = createVector(0, 0);
  this.c = c;

  this.update = function() {
    if(mouseX < width && mouseX > 0 && mouseY > 0 && mouseY < height){
      var newspeed = createVector(mouseX-width/2, mouseY-height/2);
      newspeed.setMag(3);
      this.speed.lerp(newspeed, 0.2);
      this.pos.add(this.speed);
    }
  }

  this.show = function(){
    fill(c);
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);
    if(d < this.r + other.r/2){
      var newR = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(newR / PI);
      return true;
    }else{
      return false;
    }
  }
}
