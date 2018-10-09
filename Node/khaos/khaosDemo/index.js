/**
 * @create meizu
 * @createTime 2018-10-09T00:00:00+08:00.
 */
var $ = require('jquery');
var EventEmitter = require('events');

var KhaosDemo = function () {
  this._events = {};
  EventEmitter.apply(this, arguments);
  return arguments.length > 0 ? this.init.apply(this, arguments) : this;
};

KhaosDemo.prototype = new EventEmitter();
KhaosDemo.prototype.constructor = KhaosDemo;

KhaosDemo.prototype.init = function (options) {

  return this;
};


module.exports = KhaosDemo;
