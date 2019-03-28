var Engine = Matter.Engine,
  World = Matter.World,
  Render = Matter.Render,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Composites = Matter.Composites,
  Bodies = Matter.Bodies

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

var rectA = Bodies.rectangle(200, $(window).height()-100, 40, 200, {
  isStatic:true,
  render:{ // 填充色
    fillStyle: '#f00'
  },
  collisionFilter:{ // 设置碰撞属性
    group: -1
  }
})

var rectB = Bodies.rectangle(200, $(window).height() - 180, 400, 40, {
  render:{
    fillStyle: '#00f'
  },
  collisionFilter:{
    group: -1
  }
})

var constraint = Constraint.create({
  bodyA: rectA,
  pointA: { x: 0, y: -80 },
  bodyB: rectB,
  length: 0,
  stiffness: 0.9
})

var ground = Bodies.rectangle($(window).width() / 2, $(window).height() - 10, $(window).width(), 20, {
  isStatic:true,
  render:{
    fillStyle: '#9fa'
  }
})

var stack_rect = Composites.stack(300, 100, 4, 3, 0, 0, function(x, y) {
  return Bodies.rectangle(x, y, 150, 40)
})

var stack_circle = Composites.stack(1200, 10, 1, 5, 2, 8, function (x, y) {
  return Bodies.circle(x, y, 30);
})

var mouseConstraint = MouseConstraint.create(engine, {
  element: document.body
})

// 桥墩
var wallA = Bodies.rectangle(630, 730, 50, 400, { isStatic:true })
var wallB = Bodies.rectangle(1580, 730, 50, 400, { isStatic:true })

// 桥上的木头  666 和600 分别是第一块木板的x和y坐标，
var chains = Composites.stack(666, 600, 10, 1, 9, 0, function (x, y) {
  return Bodies.rectangle(x, y, 80, 30, {
    chamfer: 15 // 将矩形添加圆角
  })
})

// 左侧固定在桥墩上
var fixLeft = Constraint.create({
  bodyA: wallA,
  pointA: { x: 0, y: -90 },
  bodyB: chains.bodies[0],
  pointB: { x: -25, y: 0 }
})

// 右侧固定在桥墩上
var fixRight = Constraint.create({
  bodyA: chains.bodies[chains.bodies.length - 1],
  pointA: { x: 25, y: 0 },
  bodyB: wallB,
  pointB: { x: 0, y: -90 }
})

// 三条链接铁索
// 第一个链接点在横向上距离木板中心有向右的宽度的0.4倍的偏移量，纵向上与木板中心平行。
// 第二个链接点在横向上距离木板中心有向左的宽度的0.4倍的偏移量，纵向上与木板中心平行。
Composites.chain(chains, 0.4, 0, -0.4, 0, {});
Composites.chain(chains, 0.4, 0.3, -0.4, 0.3, {});
Composites.chain(chains, 0.4, -0.3, -0.4, -0.3, {});

World.add(world, [rectA, rectB, ground, stack_rect, stack_circle, mouseConstraint, constraint])
// 桥墩，铁索固定的木板加入到世界中
World.add(world, [wallA, wallB, chains, fixLeft, fixRight])
