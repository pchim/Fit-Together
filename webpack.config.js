const config = {
  context: `${__dirname}/src/client`,
  entry: {
    javascript: './app.js', // take in javascript entry point
    html: './index.html', // take in the client's index.html
    css: './assets/css/style.css'   
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
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};
module.exports = config;
