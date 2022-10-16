class Projectile{
    constructor() {

        this.x = player.body.position.x + (60*player.direction);
        this.y = player.body.position.y;
        this.startx = this.x;
        this.width = player.width/2;
        this.height = player.height/3;

        this.frameHit = 0;
        this.frameOut = 0;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height)
        this.speed = 20;
        this.direction = player.direction;

    }

    setProperties(){

        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = fireballImg;
        sprite.xScale = 0.1;
        sprite.yScale = 0.1;
    }

    move(){
        //console.log(this.body.position.x);
        Body.set(this.body, "position", {x: this.body.position.x  + (this.speed*this.direction), y: this.y});

    }

    addBody(){
        World.add(engine.world, this.body);
    }

    removeBody(){
        World.remove(engine.world, this.body);
    }

    explodeProjectile(){
        this.speed = 0
        let sprite = this.body.render.sprite
        sprite.texture = explodeImg;
        sprite.xScale = 1;
        sprite.yScale = 1;
    }

    checkCollisionObstacle(){

        if (this.frameOut > 100){
            this.removeBody();
            player.projectiles.delete(this);
        }
        this.frameOut += 1;

        for(let obs = 0; obs < obstaclesXPos.length; obs ++){
            if (SAT.collides(this.body, obstacles[obs].body).collided){
                this.explodeProjectile();
                if (this.frameHit < 10) this.frameHit += 1;
                else {
                    this.removeBody();
                    player.projectiles.delete(this);
                }
            }

        }
    }

    init(){
        this.setProperties();
        this.addBody();

    }
}