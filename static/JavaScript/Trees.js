class Tree{
    constructor(x) {
        this.x = x;
        this.y = 400;
        this.width = 10;
        this.height = 400;

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
    }

    setProperties(){
        this.body.isStatic = true;
        this.body.collisionFilter = {
          'group': -1,
          'category': 2,
          'mask': 0,
        };
    }

    addBody(){
        World.add(engine.world, this.body);
    }

    init(){
        this.setProperties();
        this.addBody();
    }
}