class Projectile{
    constructor() {

        this.x = player.body.position.x + 50;
        this.y = player.body.position.y;
        this.width = player.width/2;
        this.height = player.height/3;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height)
        this.speed = 10;

    }

    setProperties(){

        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = fireballImg;
        sprite.xScale = 0.1;
        sprite.yScale = 0.1;

        // Body.setVelocity(this.body, {
        //   x: 10,
        //   y: 0
        // })
        // var gravity = engine.world.gravity;
        //
        //
        // Body.applyForce(this.body, this.body.position, {
        //     x: gravity.x * gravity.scale * this.body.mass,
        //     y: -gravity.y * gravity.scale * this.body.mass
        // });
    }

    move(){
        console.log(this.body.position.x);
        Body.set(this.body, "position", {x: this.body.position.x  + this.speed, y: this.y});

    }

    addBody(){
        World.add(engine.world, this.body);
    }

    removeBody(){
        World.remove(engine.world, this.body);
    }

    init(){
        this.setProperties();
        this.addBody();
    }
}