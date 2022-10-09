class Ground{
    constructor(x) {
        this.depth = 50;
        this.y = windowHeight-20;
        this.width = 300;
        this.x = x;
        this.height = this.depth;

        this.body = Bodies.rectangle(this.x, this.y, 2*this.width, this.height);
    }

    setProperties(){
        this.body.isStatic = true;
        //this.body.render.fillStyle = 'green';
        let sprite = this.body.render.sprite
        sprite.texture = groundImg;
        sprite.xScale = 1;
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

    getPlayerPos(){
        return this.y - this.height;
    }

}