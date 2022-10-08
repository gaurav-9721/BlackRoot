class Heart{
    constructor(x) {
        this.x = x;
        this.y = 30;
        this.width = 30;
        this.height = 30;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
    }

    setProperties(){
        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = heartImg;
        sprite.xScale = 0.4;
        sprite.yScale = 0.4;
        this.body.friction = 3;
    }

    addBody(){
        World.add(engine.world, this.body);
    }
    removeBody(){
        World.remove(engine.world, this.body);
    }

    init(){
        this.setProperties();
        this.addBody();
    }
}

class HealthBar{
    constructor() {
        this.x = 30;
        this.y = 50;
        this.health = []

        this.no_of_hearts = player.health;
        for(let h = 0; h < this.no_of_hearts; h++){
            this.health.push(new Heart(40 + h*35));
        }
    }

    show(){
        for(let h = 0; h < this.no_of_hearts; h++){
            this.health[h].init();
        }
    }

    removeHeart(){
        this.no_of_hearts -= 1;

    }
}