const promptJson = require('./prompt.json').config;

module.exports.prompt = {
  type: String, // 表示提问的类型 list | rawlist | expand | checkbox | confirm | confirm | password | editor
  name: String, // 在最后获取到的answers回答对象中，作为当前这个问题的键
  message: String | Function, // 打印出来的问题标题，如果为函数的话
  default: String | Number | Array | Function, // 用户不输入回答时，问题的默认值。或者使用函数来return一个默认值。假如为函数时，函数第一个参数为当前问题的输入答案。
  validate: Function, // 接受用户输入，并且当值合法时，函数返回true。当函数返回false时，一个默认的错误信息会被提供给用户。
  filter: Function, // 接受用户输入并且将值转化后返回填充入最后的answers对象内。
  when: Function | Boolean, // 接受当前用户输入的answers对象，并且通过返回true或者false来决定是否当前的问题应该去问。也可以是简单类型的值。
  pageSize: Number, // 改变渲染list,rawlist,expand或者checkbox时的行数的长度。
};

module.exports.presets = {
  webpackConfigPath: 'webpack.config.js', // local webpack config path
  dist: 'dist',
  publicPath: '',
  templates: ['src/*/!(layout).html', 'src/index.html', 'index.html'],
  entries: ['src/{js,ts,jsx,tsx}/*.{js,ts,jsx,tsx}', 'src/{main,index}.{js,jsx,ts,tsx}'],
  externals: {},
  frameworks: {}, // set front-end frameworks if project used
  hash: {
    length: 7,
    separator: '-',
  },
  features: {
    // configure inside features
    // spec: [level, config]
    // level: 0 - disable
    //        1 - enable only bundle
    //        2 - enable both of dev and bundle
    babel: [2],
    eslint: [2],
    extractCSS: [
      1,
      {
        filename: 'css/[name].css',
        publicPath: '../',
      },
    ],
    autoprefixer: [2],
  },
};

module.exports.promptQuestion = {
  basic: {
    framework: {
      type: 'list',
      name: 'framework',
      message: promptJson.init.questions.framework,
      choices: [
        { name: 'Vanilla JS', value: '' },
        { name: 'Vue.js', value: 'vue' },
        { name: 'React', value: 'react' },
        { name: 'Angular', value: 'angular' },
      ],
    },
    language: {
      type: 'list',
      name: 'language',
      message: promptJson.init.questions.language,
      choices: [
        { name: 'JavaScript', value: 'js' },
        { name: 'TypeScript', value: 'ts' },
      ],
    },
    features: {
      type: 'checkbox',
      name: 'features',
      message: promptJson.init.questions.features,
      choices: Object.keys(this.presets.features),
      default: Object.keys(this.presets.features).filter(name => this.presets.features[name][0]),
    }
  },
  features: {
    autoprefixer: {
      type: 'checkbox',
      name: 'browserslist',
      message: promptJson.init.questions.autoprefixer,
      choices: [
        {
          name: 'IE 9 ~ 11',
          value: 'last 3 ie versions',
        },
        {
          name: 'Android 4.4 ~ 6',
          value: 'last 4 Android versions',
        },
        {
          name: 'iOS 7 ~ 9',
          value: 'last 4 iOS versions',
        },
      ],
    },
  },
};
