class rope{
        
    
    constructor(bodyA,bodyB)
    {
        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        stifiness:0.01,
        length:10
        }
        this.bodyA=bodyA;
        this.bodyB=bodyB;
        this.body=Constraint.create(options)
        World.add(world,this.body);
    }

}