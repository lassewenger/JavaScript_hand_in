module.exports = {
  entry: "./main.js",
  output: {
    filename: "./bundle.js",
    path: __dirname + "/dist"
  },
  watch: true,
  resolve: {
    extensions: ['.js']
  },
  devServer: { inline: true },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        loader: 'style-loader!css-loader'
      },
       {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: "file-loader"
      }
    ]
  }
}