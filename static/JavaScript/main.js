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

var centerX = windowWidth/4, centerY = windowHeight/3;

var grounds = [];
var ground_body = []
total_grounds = 20;
for(let i = 0; i<total_grounds; i++){
    grounds.push(new Ground(i*500));
}
for(let i = 0; i<total_grounds; i++){
    grounds[i].init();
    ground_body.push(grounds[i].body);
}



var player = new Player();
player.init();
var healthBar =  new HealthBar();
healthBar.init();



var obstaclesXPos = [400, 1000, 1400, 1800, 2500, 3000];
var obstacles = []
for(let obs = 0; obs < obstaclesXPos.length; obs ++){
    obstacle = new Obstacle(obstaclesXPos[obs]);
    obstacle.init()
    obstacles.push(obstacle);
}

function animate(){
    requestAnimationFrame(animate);
    moveCamera();
    player.animatePlayer();

}




document.addEventListener('keydown', function(event){
    if(event.key === 'w') player.jump() ;
    if(event.key === 'a') {
        player.allowMoveLeft = true;
        player.direction = -1
    }
    if(event.key === 's') {
        if (player.allowShoot) player.shoot();

    }
    if(event.key === 'd') {
        player.allowMoveRight = true;
        player.direction = 1;
    }
    if(event.key === 'c') player.changeHealth();

} );

document.addEventListener('keyup', function(event){
    if(event.key === 'w') {}
    if(event.key === 'a') {
        player.allowMoveLeft = false;

    }
    if(event.key === 's') player.allowShoot = true;

    if(event.key === 'd'){
        player.allowMoveRight = false;
        player.setIdle();
    }
} );


document.addEventListener('keypress', function(event){


} );

animate();

function moveCamera(){
    // Move Camera
    render.bounds.min.x = centerX + player.body.bounds.min.x
    render.bounds.max.x = centerX + player.body.bounds.min.x + windowWidth

    Body.set(healthBar.body, "position", {x: player.body.position.x -100, y: healthBar.y});
    Bounds.shift(render.bounds, {
        x: player.body.position.x - centerX,
        y: 0,
    })
}

World.add(engine.world, [mouseConstraint]);
Engine.update(engine);
Runner.run(engine);
Render.run(render);

