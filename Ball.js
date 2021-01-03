class Ball
{
    constructor(x, y,radius)
    {
        var options = 
        {
            'restitution':0.8,
            'friction':2,
            'density':1.6,
            'frictionAir':0.35,
        }
        this.radius=radius;
        this.body = Bodies.circle(x, y,radius,options);
         
        World.add(world, this.body);
       
    }
display()
{
 var p=this.body.position;
 ellipseMode(CENTER);
 fill("PINK")
 ellipse(p.x,p.y,this.radius*2,this.radius*2);
}
}