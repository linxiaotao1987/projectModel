
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var config = require('./webpack.config.base');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve('build');
var TEM_PATH = path.resolve(ROOT_PATH,'templates');

config.devtool = 'source-map';
config.output = {
    path:BUILD_PATH,
    filename:'[name].js',
    chunkFilename:'[name].js',
    publicPath:'/static/'
};
//https://dev.wx.mecollege.cn/chenjiayu/index.php?r=course/course-detail&id=239&agentCode=NDk=

module.exports = config;