const inquirer = require('inquirer');
const { promptQuestion } = require('./config');

inquirer.prompt([
  promptQuestion.basic.framework,
  promptQuestion.basic.language
]).then((answers) => {  // framework | language | features
  if (answers.language === 'ts') {
    // 如果ts，需要删除eslint的配置
  }

  return inquirer.prompt([promptQuestion.basic.features]).then((upstream) => {
    return Object.assign(upstream, answers);
  });
}).then(answers => (  // autoprefixer
  // 检测 answers.features 中包含 autoprefixer
  answers.features.includes('autoprefixer') ?
    inquirer.prompt([promptQuestion.features.autoprefixer])
      .then((upstream) => {
        return Object.assign(upstream, answers);
      }) :
    answers
)).then((answers) => {
  console.log(answers);
});
