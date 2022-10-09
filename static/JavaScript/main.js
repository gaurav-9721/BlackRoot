function print(str){
    console.log(str);
}


let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;
let frame = 0;


var ground = new Ground();
ground.init();
var player = new Player();
player.init();
var healthBar =  new HealthBar();
healthBar.init();


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
        player.projectiles[removeProjectiles[rp]].removeBody();
        player.projectiles.splice(removeProjectiles[rp]);

    }
    //console.log(player.projectiles.length);

    //frame += 1;

}




document.addEventListener('keydown', function(event){
    if(event.key === 'w') player.jump() ;
    if(event.key === 'a') {
        player.allowMoveLeft = true;
        player.direction = -1
    }
    if(event.key === 's') player.shoot();
    if(event.key === 'd') {
        player.allowMoveRight = true;
        player.direction = 1;
    }
    if(event.key === 'c') player.changeHealth();

} );

document.addEventListener('keyup', function(event){
    if(event.key === 'w') ;
    if(event.key === 'a') {
        player.allowMoveLeft = false;
    }
    //if(event.key === 's') alert('S');
    if(event.key === 'd') player.allowMoveRight = false;
} );


document.addEventListener('keypress', function(event){


} );

animate();
Render.lookAt(render, obstacles[0].body,{
  x: windowWidth+100,
  y: 700
});

World.add(engine.world, [mouseConstraint]);
Engine.update(engine);
Runner.run(engine);
Render.run(render);

