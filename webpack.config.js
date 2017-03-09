var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
   entry: './main.js',
	
   output: {
      path:'C:\\xampp\\htdocs\\jerrythimothy',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 3111
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', "stage-0", 'react']
            }
         },
         {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
         }
      ]
   },
   plugins: [
      new ExtractTextPlugin({ filename: './css/index.css', allChunks: true })
   ]
}

module.exports = config;