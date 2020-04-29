class Rain {
    
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.x = random(1,800);
      this.y = random(-10000,70);
      this.width = 2;
      this.height = 20;
      this.body = Bodies.rectangle(this.x,this.y,2,20, options);
     
      
      
      World.add(world, this.body);
    }
   display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill("blue");
      rect(40, 40, this.width, this.height);
      pop();

    }
  };