const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: "bundle",
    filename: "./[name].bundle.js",
  },
  watch: true,
  devtool: "source-map",

  module: {
    loaders: [
      {
        test: /\.(png|jpg|jpeg|svg|gif|otf|ttf|eot|woff|woff2|)$/i,
        loader: "file-loader?name=../src/images/[name].[ext]"
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
    new ExtractTextPlugin("../src/css/styles.css"),
    new webpack.optimize.UglifyJsPlugin({
      comments: false
    }),
  ],
  devServer: {
    port : 3000
  }
};
