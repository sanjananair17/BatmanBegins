class Umbrella {
      
     constructor(){
          var options = {
               isStatic: true,
               restitution: 0.5
          };
          this.body = Matter.Bodies.rectangle(100, 350, 130, 130, options);
          this.width = width;
          this.height = height;
          this.image = loadImage("boy.png");
          World.add(world, this.body);
     }
     display(){
          image(this.image, 30, 280, 140, 140);

     }
}