/**
 * @create {{user}}
 * @createTime {{date}}.
 */
var $ = require('jquery');
var EventEmitter = require('events');

var {{ firstChar name }} = function () {
  this._events = {};
  EventEmitter.apply(this, arguments);
  return arguments.length > 0 ? this.init.apply(this, arguments) : this;
};

{{ firstChar name }}.prototype = new EventEmitter();
{{ firstChar name }}.prototype.constructor = {{ firstChar name }};

{{ firstChar name }}.prototype.init = function (options) {

  return this;
};


module.exports = {{ firstChar name }};
