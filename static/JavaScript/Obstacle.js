class Obstacle{
    constructor(posX) {
        this.x = posX;
        this.width = windowWidth/15;
        this.height = windowHeight/8;
        this.y = grounds[0].getPlayerPos();
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);

    }

    setProperties(){
        this.body.isStatic = true;
        //this.body.render.fillStyle = 'green';
        let sprite = this.body.render.sprite
        sprite.texture = spikesImg;
        sprite.xScale = 0.8;
        sprite.yScale = 1;
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