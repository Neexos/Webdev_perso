function Brick(x, y){
  this.x = x;
  this.y = y;
  this.w = 50;
  this.h = 20;


  this.show = function(){
    rect(this.x*this.w, this.y*this.h, this.w, this.h);
  }
}
