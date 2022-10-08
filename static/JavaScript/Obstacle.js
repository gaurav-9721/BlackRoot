class Obstacle{
    constructor(posX) {
        this.x = posX;
        this.width = windowWidth/25;
        this.height = windowHeight/8;
        this.y = ground.getPlayerPos()-10;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);

    }

    setProperties(){
        this.body.isStatic = true;
        //this.body.render.fillStyle = 'green';
        let sprite = this.body.render.sprite
        sprite.texture = cactusImg;
        sprite.xScale = 0.15;
        sprite.yScale = 0.15;
        this.body.friction = 3;
    }

    addBody(){
        World.add(engine.world, this.body);
    }

    init(){
        this.setProperties();
        this.addBody();
    }
}