class Paper {
  constructor(x,y) {
      var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0,
          density : 0.1
          
      }
      this.r=85;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("paper.png");
      World.add(world, this.body);
  }
  
  display() {

      var pos = this.body.position;

      push();
      translate(pos.x, pos.y);
      imageMode(RADIUS);
      image(this.image,0,0, this.r, this.r);
      noStroke();
      fill(255);
      ellipseMode(RADIUS);
      pop();
  }

};