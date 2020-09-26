class Umbrella {
     constructor(x,y,radius){
          var options = {
               isStatic: true,
               restitution: 0.5
          };
          this.body = Matter.Bodies.circle(175, 360, 80, options);
          this.x = x;
          this.y = y;
          this.radius = radius;
          this.image = loadImage("boy.png");
          World.add(world, this.body);
     }
     display(){
          image(this.image, this.x, this.y, this.radius, this.radius);
     }
}