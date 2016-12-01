const webpack = require("webpack"),
      ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./dist/builds/js/main.js",
  output: {
    filename: "./bundle.js"
  },
  watch: true,
  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|svg|gif|otf|ttf|eot|woff|woff2|)$/,
        loader: "url-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader?sourceMap,minimize!postcss-loader!sass-loader"
        })
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules$/,
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("dist/css/styles.css"),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    }),
  ],
  devServer: {
    baseContent: "./",
    inline: true,
    port : 3000
  }
};
