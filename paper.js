class Paper {

    constructor(x, y, radius){

    var options = {
        isStatic: false,
        restitution: 0.3,
        friction: 1,
        density: 1.2
    }

        this.body = Bodies.circle(x, y, radius, options)
        this.x = x;
        this.y = y;
        this.radius = radius;
        World.add(world, this.body);
        this.image = loadImage("Foil.png")
    }

    display(){
        //circleMode(CENTER);
        fill("white");
        image(this.image,this.body.position.x,this.body.position.y, 240, 160);
    }


}
