class Drop {
  constructor(x, y, radius) {
      var options={
       restitution: 0.1,
       friction: 0.1
    };
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world,this.body);
  }

  display(){
    var pos = this.body.position;
    fill("blue");
    rectMode(CENTER);
    rect(pos.x, pos.y, this.radius);
  }

   update(){
     if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x: random(0,500), y: random(-20,-10)});
      }
   }
}