var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Render = Matter.Render,
  Constraint = Matter.Constraint,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint,
  Composites = Matter.Composites

var engine = Engine.create(),
  world = engine.world

var render = Render.create({
  engine: engine,
  element: document.body,
  options: {
    width: $(window).width(),
    height: $(window).height(),
    wireframes: false // 用于调试
  }
})

Engine.run(engine)
Render.run(render)

// 添加鼠标控制
var mouseConstraint = MouseConstraint.create(engine, {})

var cloth = Composites.softBody(100, 100, 6, 10, 2, 2, false, 22, {
  render:{
    visible:false
  },
  collisionFilter:{
      group:-1
  }
}, {})

//将最上方的6个球固定。
for(var i = 0; i < 6; i++) {
  cloth.bodies[i].isStatic = true;
}

var ground = Bodies.rectangle(600, 700, 1800, 100, {
  isStatic: true
})

World.add(world, [ground, cloth, mouseConstraint])
