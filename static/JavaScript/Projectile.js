class Projectile{
    constructor() {

        this.x = player.body.position.x + (100*player.direction);
        this.y = player.body.position.y;
        this.startx = this.x;
        this.width = player.width/2;
        this.height = player.height/3;


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

    checkCollisionObstacle(i){
        for(let obs = 0; obs < obstaclesXPos.length; obs ++){
            if (SAT.collides(this.body, obstacles[obs].body).collided){
                this.removeBody();

                removeProjectiles.push(i);
            }
            // if(this.body.position.x > (this.startx+800) || this.body.position.x < (this.startx-500)){
            //     removeProjectiles.push(i);
            // }
        }
    }

    init(){
        this.setProperties();
        this.addBody();

    }
}