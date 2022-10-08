
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;
let frame = 0;


let ground = new Ground();
ground.init();
let player = new Player();
player.init();
let healthBar =  new HealthBar();
healthBar.show();


var obstaclesXPos = [400, 1000, 1400];
var obstacles = []
for(let obs = 0; obs < obstaclesXPos.length; obs ++){
    obstacle = new Obstacle(obstaclesXPos[obs]);
    obstacle.init()
    obstacles.push(obstacle);
}

function animate(){
    requestAnimationFrame(animate);
    player.move();
    player.allowJump = SAT.collides(player.body, ground.body).collided;



    for(let obs = 0; obs < obstaclesXPos.length; obs ++){
        player.allowJump = SAT.collides(player.body, obstacles[obs].body).collided || player.allowJump;
    }

    removeProjectiles = []
    for(let i = 0; i < player.projectiles.length; i++){

        player.projectiles[i].move();
        player.projectiles[i].checkCollisionObstacle(i);

    }
    for(let rp = 0; rp < removeProjectiles.length; rp++){
        player.projectiles.splice(removeProjectiles[rp]);
    }
    console.log(player.projectiles.length);

    //frame += 1;

}




document.addEventListener('keydown', function(event){
    if(event.key === 'w') player.jump() ;
    if(event.key === 'a') player.allowMoveLeft = true;
    if(event.key === 's') player.shoot();
    if(event.key === 'd') player.allowMoveRight = true;
    if(event.key === 'c') player.changeHealth(10);

} );

document.addEventListener('keyup', function(event){
    if(event.key === 'w') ;
    if(event.key === 'a') player.allowMoveLeft = false;
    //if(event.key === 's') alert('S');
    if(event.key === 'd') player.allowMoveRight = false;
} );


document.addEventListener('keypress', function(event){


} );

setTimeout(animate, 100);

World.add(engine.world, [mouseConstraint]);
Engine.update(engine);
Runner.run(engine);
Render.run(render);

