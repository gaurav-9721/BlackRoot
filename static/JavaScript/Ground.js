class Ground{
    constructor() {
        this.x = 0;
        this.depth = 50;
        this.y = windowHeight-20;
        this.width = windowWidth;
        this.height = this.depth;

        this.body = Bodies.rectangle(this.x, this.y, 2*this.width, this.height);
    }

    setProperties(){
        this.body.isStatic = true;
        this.body.render.fillStyle = 'green';
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