class Chain{
  constructor(bodyA,bodyB){
      var options={
          bodyA:bodyA,
          bodyB: bodyB,
          stiffness:0.2,
          length:50

      }

      this.chain= Constraint.create(options)
      World.add(world,this.chain);

      
  }

  display(){
      var posa = this.chain.bodyA.position
      var posb =  this.chain.bodyB.position
      
      strokeWeight(3);
      line(posa.x,posa.y,posb.x,posb.y);
  }
}