class Paper {
    constructor(x,y) {
      var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
      }
      this.image = loadImage("sprites/paper.png");
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }