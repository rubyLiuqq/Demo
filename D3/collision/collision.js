const width = 1200;
const height = 800;
const colors = d3.scale.category10();
const nodes = d3.range(3).map(() => {
  return {radius: Math.random() * 7 + 5};
});

const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const force = d3.layout.force()
  .nodes(nodes)
  .charge((data, index) => {
    return index ? 0 : -2000;
  })
  .gravity(0.5)
  .size([width, height]);

force.start();  // 开始作用

const svg_nodes = svg.selectAll('circle')
  .data(nodes.slice(1))
  .enter()
  .append('circle')
  .attr('r', (data) => {
    return data.radius;
  })
  .attr('fill', (data, index) => {
    return colors(index % 3);
  });

force.on('tick', () => {
  const quadtree = d3.geom.quadtree(nodes);
  const i = 0;
  const len = nodes.length;

  while(++i < len) {
    quadtree.visit();
  }

  svg.selectAll('circle')
    .attr('cx', (d) => {
      return d.x;
    })
    .attr('cy', (d) => {
      return d.y;
    })
});

function collide(node) {
  const radius = node.radius + 16,
    nx1 = node.x - radius,
    nx2 = node.x + radius,
    ny1 = node.y - radius,
    ny2 = node.y + radius;

}

