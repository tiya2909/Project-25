
class Paper {
   constructor() {
      var options = {
         isStatic: false,
         restitution: 0.1,
         friction: 6.5,
         density: 1.2
      }

      this.image = loadImage("paper.png");
      this.body = Bodies.circle(100, 640, 30, options);
      this.radius = 70;
     
      World.add(world, this.body);
   }

   display() {
      var pos = this.body.position;
      imageMode(CENTER)
      image(this.image, pos.x, pos.y, 40, 40)

   }
}