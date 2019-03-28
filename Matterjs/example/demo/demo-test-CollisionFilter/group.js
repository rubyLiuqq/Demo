var Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Composites = Matter.Composites,
  Bodies = Matter.Bodies

var engine = Engine.create(),
  world = engine.world

var render = Render.create({
  engine: engine,
  element: document.body
})

Engine.run(engine)
Render.run(render)

var stack_red = Composites.stack(200, 200, 4, 1, 0, 0, function(x,y) {
  return Bodies.circle(x, y, 20, {
    render:{
      fillStyle: 'red',
      lineWidth: 4
    },
    collisionFilter: {
      group: -1
    }
  })
})

var stack_green = Composites.stack(200, 400, 4, 1, 0, 0, function(x,y) {
  return Bodies.circle(x, y, 20, {
    render:{
      fillStyle: 'green',
      lineWidth: 4
    },
    collisionFilter: {
      group: -2
    }
  })
})

var stack_blue = Composites.stack(200, 400, 4, 1, 0, 0, function(x,y) {
  return Bodies.circle(x, y, 20, {
    render:{
      fillStyle: 'blue',
      lineWidth: 4
    },
    collisionFilter: {
      group: -3
    }
  })
})

World.add(world, [stack_red, stack_green, stack_blue])