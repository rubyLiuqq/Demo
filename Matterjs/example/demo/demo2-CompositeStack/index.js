var Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Composites = Matter.Composites

var engine = Engine.create(),
  world = engine.world

var render = Render.create({
  engine: engine,
  element: document.body
})

Engine.run(engine)
Render.run(render)

var stackRect = Composites.stack(250, 100, 6, 3, 0, 0, function (x, y) {
  return Bodies.rectangle(x, y, 80, 20);
})

var stackCircle = Composites.stack(380, 100, 7, 5, 0, 0, function (x, y) {
  return Bodies.circle(x, y, 20);
})

var ground = Bodies.rectangle(500, 600, 1000, 100, { isStatic:true })

World.add(world, [stackRect, ground])