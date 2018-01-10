const path = require('path');
module.exports = {
  entry: './src/app.js',
   watch: true,
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use:[
        'style-loader',
        'css-loader'
      ]
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'file-loader?limit=100000' }
    ]
  }
  
};

