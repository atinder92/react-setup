const path = require('path');

module.exports = {


  //entry file for the app
  entry: './src/js/app.js',

  //output file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  //modules
  module:{
      rules:[
                {
                    test    : /\.js$/,
                    exclude : /node_modules/,
                    use     : 'babel-loader'
                }

            ]
  }

};