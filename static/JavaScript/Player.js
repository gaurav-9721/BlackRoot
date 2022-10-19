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
        this.projectiles = new Set();
        this.walkFrame = 0;
        this.playerIdle = playerIdleImg;
        this.allowShoot = true;
        this.walkPosition = 0;
        this.shootFrame = 0;
        this.playerWalkImgs = [player1Img, player2Img, player3Img, player4Img, player5Img, player6Img, player7Img, player8Img, player9Img, player10Img, player11Img, player12Img]// player13Img,player4Img]
    }

    setProperties(){
       // this.body.render.fillStyle = 'yellow';
        let sprite = this.body.render.sprite
        sprite.texture = this.playerIdle;
        sprite.xScale = 0.4;
        sprite.yScale = 0.40;

    }

    setIdle(){
        let sprite = this.body.render.sprite
        sprite.texture = this.playerIdle;
        sprite.xScale = 0.5;
        sprite.yScale = 0.4;

    }



    setWalkImage(){
        if (player.direction === 1){
            if (this.walkFrame % 5 === 0){
                this.walkPosition  = (this.walkPosition + 1) % this.playerWalkImgs.length
                this.body.render.sprite.texture = this.playerWalkImgs[this.walkPosition];
            }
        }
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
            this.setWalkImage()
            this.walkFrame ++;
            //Body.set(healthBar.body, "position", {x: ppos - healthBar.body.position.x, y: healthBar.body.position.y});
        }

    }

    jump(){
        if (this.allowJump){
            Body.setVelocity(this.body, {
          x: 0,
          y: -16
        })
        }
    }

    changeHealth(){
        this.health -= 1;
        healthBar.changeHealth(this.health);

    }

    shootTransition(){
        this.body.render.sprite.texture = playerShootImg;
    }

    init(){
        this.setProperties();
        this.addBody();
    }

    shoot(){
        var projectile = new Projectile();
        projectile.init();
        this.projectiles.add(projectile);
        this.allowShoot = false;
    }

    collidesWithGround(){
        this.allowJump = false;
        for(let i = 0; i<total_grounds; i++){
            this.allowJump = SAT.collides(this.body, grounds[i].body).collided || this.allowJump;
        }


    }

    animatePlayer(){
        this.move();
        this.collidesWithGround();
        this.removeProjectiles();
    }

    removeProjectiles(){
          this.projectiles.forEach (function(value) {
          value.move();
          value.checkCollisionObstacle();
        })
    }

    collidesWithObstacle(){
        this.allowJump = false;
        for(let obs = 0; obs < obstaclesXPos.length; obs ++){
            this.allowJump = SAT.collides(this.body, obstacles[obs].body).collided || this.allowJump;
        }
    }


}