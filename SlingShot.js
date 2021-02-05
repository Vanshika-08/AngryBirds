class SlingShot{
    constructor(body1, point2){
        var options={
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point2;
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1, 200, 50, 30, 170);
        image(this.sling2, 180, 40, 30, 110)
        if(this.sling.bodyA){
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointB;
            push();

            if(point1.x<220){
                stroke(48, 22, 8);
                strokeWeight(4);
                line(point1.x-25, point1.y, point2.x-10, point2.y+15);
                line(point1.x-25, point1.y, point2.x+20, point2.y+20);
                image(this.sling3, point1.x-25, point1.y-10, 15, 30);
            }
            else{
                stroke(48, 22, 8);
                strokeWeight(4);
                line(point1.x-25, point1.y, point2.x-10, point2.y+15);
                line(point1.x-25, point1.y, point2.x+20, point2.y+20);
                image(this.sling3, point1.x+25, point1.y-10, 15, 30);
            }
         
            pop();

        }

    }

    
}