
## child_process node 子进程

- * child_process.exec(command[, options][, callback]) 启动 
  子进程来执行shell命令,可以通过回调参数来获取脚本shell执行结果
- * child_process.execfile(file[, args][, options][, callback])  
  与exec类型不同的是，它执行的不是shell命令而是一个可执行文件
- * child_process.spawn(command[, args][, options])
  仅仅执行一个shell命令，不需要获取执行结果
- * child_process.fork(modulePath[, args][, options])可以用node 
  执行的.js文件，也不需要获取执行结果。fork出来的子进程一定是node进程

**如果使用execfile()执行可执行文件，那么头部一定是#!/usr/bin/env node**

ora: 主要用来实现node.js命令行环境的loading效果，和显示各种状态的图标等
co、co-prompt: 大多数依赖回调或promise等待用户输入，可以使用co-prompt利用ES6的yield关键字, 以一种很好的方式编写非阻塞代码
cli-table: 允许node.js脚本在命令行上呈现unicode辅助表 https://www.npmjs.com/package/cli-table
