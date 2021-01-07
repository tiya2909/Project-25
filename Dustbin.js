class Dustbin {
  constructor(x, y, width, height, angle) {

    var options = {
      isStatic: true
    }

    this.image = loadImage("dustbingreen.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;


    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;



    imageMode(CENTER)
    image(this.image, pos.x, pos.y, 90, 100)
  }




}
