var Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Composites = Matter.Composites,
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
    wireframes: false
  }
})

Engine.run(engine)
Render.run(render)

var newtonC = Composites.newtonsCradle(200, 100, 7, 30, 300)
var mouseConstraint = MouseConstraint.create(engine, {})

World.add(world, [newtonC, mouseConstraint])
