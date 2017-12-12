
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var config = require('./webpack.config.base');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve('build');
var TEM_PATH = path.resolve(ROOT_PATH,'templates');

config.output = {
    path:BUILD_PATH,
    filename:'[name][hash:8].js',
    chunkFilename:'[name][hash:8].js',
    publicPath:'/static/'
};
config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
);

module.exports = config;