var Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Composites = Matter.Composites,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint

var engine = Engine.create(),
  world = engine.world

var render = Render.create({
  engine: engine,
  element: document.body,
  options: {
    width: $(window).width(),
    height: $(window).height(),
    wireframes: false,
    showAngleIndicator: true
  }
})

Engine.run(engine)
Render.run(render)

var mouseConstraint = MouseConstraint.create(engine, {
  element: document.body
})

var car = Composites.car(300, 100, 200, 50, 50)

var ground = Bodies.rectangle(800, 900, 1800, 100, {
  isStatic: true
})

var stickA=Bodies.rectangle(400, 400, 50, 700, {
  isStatic: true,
  angle: -Math.PI * 0.4
})

var stickB=Bodies.rectangle(700, 700, 50, 700, {
  isStatic: true,
  angle: Math.PI * 0.4
})

World.add(world, [ground, stickA, stickB, car, mouseConstraint])
