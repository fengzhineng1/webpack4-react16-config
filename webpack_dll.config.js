var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    react: [ 'react', 'react-dom' ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'var',
    library: '_dll_[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name].manifest.json'),
      name: '_dll_[name]_[hash]'
    })
  ]
}
