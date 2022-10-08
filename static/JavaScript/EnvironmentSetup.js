const windowWidth = window.innerWidth-20;
const windowHeight = window.innerHeight-20;

var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Runner = Matter.Runner,
    Body = Matter.Body,
    Events = Matter.Events,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    Composite = Matter.Composite;
    Collision = Matter.Collision;
    SAT = Matter.SAT;

var engine = Engine.create();
engine.gravity.scale = 0.002;
var render = Render.create({
                element: document.body,
                engine: engine,

                options: {
                    width: windowWidth,
                    height: windowHeight,
                    wireframes: false,
                    background: bgImg,
                    frictionAir: 0,
                },

});