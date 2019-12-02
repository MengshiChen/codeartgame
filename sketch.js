var xspeed = 1;
var xpos = 0;
var cloud;
var sound;
var grass;
var img1;
var img2;
var img3;
var img4;
var img5;
function preload() {
  cloud=loadImage('clound-1.png');
  grass = loadImage('grass-3.png');
  img1= loadImage('background.PNG');
  img2= loadImage('mouse-1.png');
  img3= loadImage('sun1-1.png');
  img4=loadImage('pikachu-1.png');
  img5=loadImage('sun2-1.png');
}

function setup() {
  createCanvas(1000,1000);
  noCursor();
}

function draw() {

  background(img1,0,0);
  image(cloud, xpos, 200);
  image(img2,mouseX,mouseY);

  if (xpos > width) {

    xspeed = -1;
  }

  if (xpos< 0){

    xspeed = 1;
  }
    xpos += xspeed;

  if(mouseIsPressed){
    image(img4,400,570);
  }
  else{image(grass,500,680);
        }
image(img2, mouseX,mouseY);

  if(mouseIsPressed){
    image(img5,10,20);
  }
  else{image(img3,10,20);
        }
image(img2, mouseX,mouseY);

}
