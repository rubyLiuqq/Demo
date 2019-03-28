var Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint,
  Composites = Matter.Composites,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint

var engine = Engine.create(),
  world = engine.world

var render = Render.create({
  engine: engine,
  element: document.body,
  options:{
    width: $(window).width(),
    height: $(window).width(),
    wireframes: false
  }
})

Engine.run(engine)
Render.run(render)

var rectA = Bodies.rectangle(333, $(window).height()-100, 40, 200, {
  isStatic:true,
  render:{ // 填充色
    fillStyle: '#f00'
  },
  collisionFilter:{ // 设置碰撞属性
    group: -1
  }
})

var rectB = Bodies.rectangle(333, $(window).height()-180, 400, 40, {
  render:{
    fillStyle: '#00f'
  },
  collisionFilter:{
    group: -1
  }
})

var rotate = Constraint.create({
  bodyA: rectA,
  pointA: { x:0, y:-80 }, // 物体rectA 的约束点设置在其中心位置向上平移80的位置
  bodyB: rectB, // 物体rectB的中心位置
  length: 0,
  stiffness:0.9
})

var ground = Bodies.rectangle($(window).width() / 2, $(window).height() - 10, $(window).width(), 20, {
  isStatic: true,
  render: {
    fillStyle: '#9fa'
  }
})

var stack_rect = Composites.stack(300, 100, 4, 3, 0, 0, function(x, y) {
  return Bodies.rectangle(x, y, 50, 40)
})

var stack_circle = Composites.stack(400, 100, 1, 5, 2, 3, function (x,y) {
  console.log(x, y)
  return Bodies.circle(x, y, 15);
})

var mouseConstraint = MouseConstraint.create(engine, {
  element: document.body
})

World.add(world, [rectA, rectB, ground, stack_rect, stack_circle, mouseConstraint, rotate])
