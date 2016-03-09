module.exports = {
  // context: __dirname + "/js/",
  entry: "./js/wtfvis.jsx",
  output: {
    path:  __dirname + '/build/',
    publicPath: "/build/",
    filename: "wtfviz.js"
	},
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?outputStyle=compressed"]
      },
      {
        test: /\.sass$/,
        loaders: ["style", "css", "sass?indentedSyntax=true&outputStyle=compressed"]
      },

      // Font-awesome
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
    ]
	},

  devServer: {
    port: 8081,
    colors: true,
    progress: true
  }
}
