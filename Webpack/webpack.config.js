const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 先用 css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JS 中
        // css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩。
        use: ['style-loader', 'css-loader?minimize']
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       minimize: true
        //     }
        //   }
        // ]
        // use: ExtractTextPlugin.extract({
        //   use: 'css-loader',
        // })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name]_[contenthash:8].css`,
    })
  ]
};

