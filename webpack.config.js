module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "./dist/js/bundle.js",
  },
  devtool: "#inline-source-map",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015']
        }
      }
    ]
  },
  watch: true
}
