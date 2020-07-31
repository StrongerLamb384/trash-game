class Paper{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction: 0.5,
            density: 1.2,
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        this.radius = 10;
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
//rotate(this.body.angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}