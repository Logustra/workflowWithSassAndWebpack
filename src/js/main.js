var req = require.context("./../../", true, /\.html$/);
var req = require.context("./../sass", true, /\.scss$/);
var req = require.context("./../images", true, /\.(png|jpg|jpeg|svg|gif|otf|ttf|eot|woff|woff2|)$/);

var name = "webpack";
console.log(name);
