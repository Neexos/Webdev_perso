function Wall(wall_index, wallImg) {
  this.wall_index = wall_index;
  this.img = wallImg;


  this.show = function(){
    //console.log(this.wall_index);
    for (var i = 0; i < this.wall_index.length; i++){
      image(this.img, this.wall_index[i].x, this.wall_index[i].y);
    }
  }

}
