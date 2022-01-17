const path = require('path')

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  // externals: ['lodash'], // 忽略库文件
  externals: {
    lodash: {
      commonjs: 'lodash' // 表示commonjs下 引入lodash库名字必须为lodash 
      // const lodash = require('lodash')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 能使用script引入
    libraryTarget: 'umd' // umd 不管是commonJS AMD CMD
  }
}