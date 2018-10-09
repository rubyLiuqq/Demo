module.exports = {
  module: {
    name: {
      type: "string",
      required: true,
      description: "模块名"
    },
    moduleCHName: {
      type: "string",
      required: true,
      description: "模块中文名"
    },
    moduleDesc: {
      type: "string",
      required: true,
      description: "描述"
    },
    sure: {
      pattern: /y[es]*|n[o]?/,
      default: 'no',
      description: '确定吗?'
    }
  }
};
