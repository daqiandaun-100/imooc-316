module.exports = {
  use: [
    {
      loader: 'css-loader',
      options: {
        importLoaders: 2,

        // css 打包模块化
        
      }
    },
  'sass-loader',
  'postcss-loader'
  ]
}