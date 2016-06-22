const config = {
  context: `${__dirname}/src/client`,
  entry: {
    javascript: './app.js', // take in javascript entry point
    html: './index.html', // take in the client's index.html 
  },

  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dev/client`,
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
        // bundle scss files with bundle.js
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      { 
        // copy over png files
        test: /\.png$/, 
        loader: 'file-loader?name=assets/images/[name].[ext]' 
      }
    ],
  },
};
module.exports = config;
