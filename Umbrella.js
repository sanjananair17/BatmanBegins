/*class Umbrella {
      
    constructor(x,y,radius){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 25;
         this.body = Matter.Bodies.circle(x,y, radius, options);
         this.radius = radius;
         this.image = loadImage("boy.png");
         World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         image(this.image, x, y,radius);
    }
}*/

class Umbrella {
      
     constructor(){
          var options = {
               isStatic: true,
               restitution: 0.5
          };
          //var radius = 25;
          this.body = Matter.Bodies.rectangle(100,350, width, height, options);
          this.width = width;
          this.height = height;
          this.image = loadImage("boy.png");
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          image(this.image, pos.x-20, pos.y+50,250,250);

     }
}