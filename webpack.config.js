var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    filename: "./bundle.js"
  },
  watch: true,
  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader?sourceMap,minimize!postcss-loader!sass-loader?"
        })
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules$/,
        query: {
          presets: ["es2015"]
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
