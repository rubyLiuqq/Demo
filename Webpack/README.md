# Webpack 学习笔记

## loader 注意事项：
1. use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；
2. 每一个 Loader 都可以通过 URL querystring 的方式传入参数


## 插件介绍
`ExtractTextPlugin` 插件的作用是提取出 JS 代码里的 CSS 到一个单独的文件
