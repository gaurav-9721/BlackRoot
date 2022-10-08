class Player{
    constructor() {
        this.startX = 100;
        this.width = windowWidth/16;
        this.height = windowHeight/6;
        this.startY = ground.getPlayerPos();
        this.body = Bodies.rectangle(this.startX, this.startY, this.width, this.height);


        this.speed = 5;
        this.allowMoveLeft = false;
        this.allowMoveRight = false;
        this.allowJump = false;
    }

    setProperties(){
        this.body.render.fillStyle = 'yellow';
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