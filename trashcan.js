class Trashcan {

    constructor(x,y,width,height){

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
        }


        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){

        rectMode(CENTER);
        fill("blue");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

    }

}