const webpack = require('webpack');
let production = false;
let fp = 'dev';
if (process.env.NODE_ENV === 'production') {
  production = true;
  fp = 'dist';
}
console.log('node env', process.env.NODE_ENV);
const config = {
  context: `${__dirname}/src/client`,
  entry: {
    javascript: './app.js', // take in javascript entry point
    html: './index.html', // take in the client's index.html  
  },

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/${fp}/client`,
  },

  module: {
    loaders: [
      {
        // pack js modules together
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        // include html files
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
    ],
  },

  // plugins: [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   }),
  // ]
};
module.exports = config;
