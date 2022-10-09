class Player{
    constructor() {
        this.startX = 0;
        this.width = windowWidth/20;
        this.height = windowHeight/6;
        this.startY = grounds[0].getPlayerPos();
        this.body = Bodies.rectangle(this.startX, this.startY, this.width, this.height, {inertia: Infinity});

        this.speed = 5;
        this.allowMoveLeft = false;
        this.allowMoveRight = false;
        this.allowJump = false;
        this.direction = 1;
        this.health = 10;
        this.projectiles = [];
    }

    setProperties(){
       // this.body.render.fillStyle = 'yellow';
        let sprite = this.body.render.sprite
        sprite.texture = playerImg;
        sprite.xScale = 0.3;
        sprite.yScale = 0.3;

    }

    addBody(){
        World.add(engine.world, this.body);
    }

    move(){
        let ppos = this.body.position.x ;
        if (this.allowMoveLeft){
            Body.set(this.body, "position", {x: this.body.position.x  - this.speed, y: this.body.position.y});
            //Body.set(healthBar.body, "position", {x: ppos - healthBar.body.position.x, y: healthBar.body.position.y});
        }

        if (this.allowMoveRight){
            Body.set(this.body, "position", {x: this.body.position.x + this.speed, y: this.body.position.y});
            //Body.set(healthBar.body, "position", {x: ppos - healthBar.body.position.x, y: healthBar.body.position.y});
        }
    }

    jump(){
        if (this.allowJump){
            Body.setVelocity(this.body, {
          x: 0,
          y: -14
        })
        }
    }

    changeHealth(){
        this.health -= 1;
        healthBar.changeHealth(this.health);

    }


    init(){
        this.setProperties();
        this.addBody();
    }

    shoot(){
        var projectile = new Projectile();
        projectile.init();
        this.projectiles.push(projectile);
    }


}