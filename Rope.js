class Rope{
    constructor(bodyA,bodyB){
        var options ={
          bodyA: bodyA.body,
          bodyB: bodyB.body,
          stiffness: 0.04,
          length: 300
        }
        const Constraint = Matter.Constraint;
        this.body = Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        strokeWeight(3);
        fill("white");
        line(bodyA.pos.x, bodyA.pos.y, bodyB.pos.x, bodyB.pos.y);
    }
}