const path = require('path');

module.exports = (env, { mode }) => ({
  entry: { app: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist', 'assets', 'built'),
    filename: 'app.js',
    publicPath: '/assets/built/'
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    compress: true
  },
  devtool: mode === 'development' ? 'source-map' : false,
  plugins: []
});
