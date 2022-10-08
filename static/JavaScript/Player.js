class Player{
    constructor() {
        this.startX = 100;
        this.width = windowWidth/20;
        this.height = windowHeight/6;
        this.startY = ground.getPlayerPos();
        this.body = Bodies.rectangle(this.startX, this.startY, this.width, this.height, {inertia: Infinity});

        this.speed = 5;
        this.allowMoveLeft = false;
        this.allowMoveRight = false;
        this.allowJump = false;
    }

    setProperties(){
       // this.body.render.fillStyle = 'yellow';
        let sprite = this.body.render.sprite
        sprite.texture = playerImg;
        sprite.xScale = 0.4;
        sprite.yScale = 0.4;


    }

    addBody(){
        World.add(engine.world, this.body);
    }

    move(){
        if (this.allowMoveLeft)
        Body.set(this.body, "position", {x: this.body.position.x  - this.speed, y: this.body.position.y});

        if (this.allowMoveRight)
        Body.set(this.body, "position", {x: this.body.position.x  + this.speed, y: this.body.position.y});
    }

    jump(){
        if (this.allowJump){
            Body.setVelocity(this.body, {
          x: 0,
          y: -14
        })
        }


    }


    init(){
        this.setProperties();
        this.addBody();
    }


}