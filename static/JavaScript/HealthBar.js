class HealthBar{
    constructor() {
        this.x = player.startX - 60;
        this.y = 40;
        this.width = 400
        this.height = 40
        this.img = [health1Img, health2Img, health3Img, health4Img, health5Img, health6Img, health7Img, health8Img, health9Img, health10Img,]
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height);
    }

    setProperties(){
        this.body.isStatic = true;
        let sprite = this.body.render.sprite
        sprite.texture = health10Img;
        sprite.xScale = 0.7;
        sprite.yScale = 0.8;
    }

    addBody(){
        World.add(engine.world, this.body)
    }

    changeHealth(health){
        this.body.render.sprite.texture = this.img[health-1]
    }

    init(){
        this.setProperties();
        this.addBody();
        this.changeHealth(10);
    }
}