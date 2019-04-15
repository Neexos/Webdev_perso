var blob;
var blobs = [];
var zoom = 1;
var c = [];

function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function setup(){
  cnv = createCanvas(windowWidth,windowHeight-50);
  blob = new Blob(0, 0, 64, [255,255,255]);

  for(var i = 0; i < 95; i++){
    for(j=0; j<3; j++){
      append(this.c, random(100,255));
    }
    var x = random(-width*2, width*2);
    var y = random(-height*2, height*2);
    blobs[i] = new Blob(x, y, 16, c)
    c = [];
  }
}



function draw(){
  background(50,50,50);
  translate(width/2,height/2);
  var newzoom = 64 / blob.r;
  zoom = lerp(zoom, newzoom, 0.1);
  scale(zoom);
  translate(-blob.pos.x,-blob.pos.y);

  for(var i = blobs.length-1; i >= 0; i--){
    blobs[i].show();
    if(blob.eats(blobs[i])){
      blobs.splice(i, 1);
      append(blobs, new Blob(random(-width, width)/zoom, random(-height, height)/zoom, 16, [random(100,255),random(100,255),random(100,255)]));
    }
  }
  blob.show();
  blob.update();


}
