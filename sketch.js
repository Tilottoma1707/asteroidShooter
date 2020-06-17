var ship;

var asteroids =[];

var lasers = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  ship = new Ship();
  for(var i = 0; i <10;i++){
  asteroids.push(new asteroid())
  }
}

function draw() {
  background(0);

  fill(255)
  textSize(23)
  text("Rotate and press space to shoot",windowWidth/2.4,windowHeight/3.6)

  ship.render();
  ship.turn();
  ship.update();
  //asteroids.render();
  for(var i = 0; i < asteroids.length;i++){
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }

  for (var i = lasers.length - 1; i >= 0; i--) {
    lasers[i].render();
    lasers[i].update();
    if(lasers[i].offscreen()){
      lasers.splice(i,1);
    break;
    }
          for (var j = asteroids.length - 1; j >= 0; j--) {
        if (lasers[i].hits(asteroids[j])) {
          if(asteroids[j].r > 10){
          if (asteroids[j].r > 10) {
            var newAsteroids = asteroids[j].break();
            asteroids = asteroids.concat(newAsteroids);
          }
        }
          asteroids.splice(j, 1);
          lasers.splice(i, 1);
          break;
        }
      }

      
  }

 // if(asteroids[i].isTouching(ship.heading)){
   // rect(0,0,windowWidth,windowHeight)
  //}
}
function keyReleased(){
  ship.setRotation(0);
  ship.boosting(false);
  ship.edges();

  
}
function keyPressed(){
  if(keyCode == 32){
    lasers.push(new laser(ship.pos,ship.heading));
  }
  if(keyCode == RIGHT_ARROW){
    ship.setRotation(0.1);
  }else if(keyCode == LEFT_ARROW){
    ship.setRotation(-0.1);
  }else if(keyCode == UP_ARROW){
    ship.boosting(true);
  }
}

//function mousePressed(){
  
//}
