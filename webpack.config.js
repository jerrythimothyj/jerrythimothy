var config = {
   entry: './main.js',
	
   output: {
      path:'C:\\xampp\\htdocs\\jerrythimothy',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
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
         }
      ]
   }
}

module.exports = config;