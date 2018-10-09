const path = require('path');
const Khaos = require('khaos');
const co = require('co');
const prompt = require('co-prompt');
const moment = require('moment');

const schema = require('./schema');
const template = path.join(__dirname, './template');
const toPath = process.cwd();

co(function* () {
  const khaos = new Khaos(template);
  khaos.helpers({
    'firstChar': function (value) {
      const arr = value.split('');
      arr[0] = arr[0].toUpperCase();
      return arr.join('');
    }
  });

  const answers = {
    name: 'khaosDemo',
    moduleCHName: 'khaos 测试',
    moduleDesc: '一个khaos的测试',
    user: process.env.LOGNAME,
    date: moment().format('MMMM Do YYYY, hh:mm:ss')
  }

  const khaosFile = yield khaos.read();
  khaos.write(toPath, khaosFile, answers, (err) => {
    if (err) console.log(err);
  });
});
