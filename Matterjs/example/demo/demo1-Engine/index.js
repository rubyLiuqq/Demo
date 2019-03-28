var Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Bodies = Matter.Bodies

var engine = Engine.create(),
  world = engine.world

var render = Render.create({
  engine: engine,
  element: document.body
})

Engine.run(engine)
Render.run(render)

var boxA = Bodies.rectangle(500, 170, 40, 260),
  ground = Bodies.rectangle(400, 600, 600, 100, { isStatic: true })

World.add(world, [boxA, ground])

