
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    render: {visible: false}
  }
});
render.mouse = mouse;



let ground = new Ground();
ground.init();
let player = new Player();
player.init();


var obstaclesX = [400, 1000];
let obs1 = new Obstacle(400);
let obs2 = new Obstacle(800);

obs2.init();
obs1.init()

function animate(){
    requestAnimationFrame(animate);
    player.move();
    player.allowJump = SAT.collides(player.body, ground.body).collided;
}




document.addEventListener('keydown', function(event){
    if(event.key === 'w') player.jump() ;
    if(event.key === 'a') player.allowMoveLeft = true;
    //if(event.key === 's') alert('S');
    if(event.key === 'd') player.allowMoveRight = true;
} );

document.addEventListener('keyup', function(event){
    if(event.key === 'w') ;
    if(event.key === 'a') player.allowMoveLeft = false;
    //if(event.key === 's') alert('S');
    if(event.key === 'd') player.allowMoveRight = false;
} );

animate();

World.add(engine.world, [mouseConstraint]);
Engine.update(engine);
Runner.run(engine);
Render.run(render);

