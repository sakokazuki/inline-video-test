const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', "stage-3"]
          }
        }
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    port: 3000,
    host: '0.0.0.0',
  },

  // watch: true,
}