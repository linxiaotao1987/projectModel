
var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve('build');
var TEM_PATH = path.resolve(ROOT_PATH,'templates');

var config = require('./webpack.config.base');

module.exports = {
    devtool:'source-map',
    entry:{
        app:path.resolve(APP_PATH,'pages/index.js'),
        react:['react','react-dom']
    },
    output:{
        path:BUILD_PATH,
        publicPath:'/',
        filename:'[name].js',
        chunkFilename:'[name].js'
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        port:80,
        host:'0.0.0.0'
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: (loader) => [
                                require('autoprefixer')({
                                    browsers: ['last 2 versions', '> 4%','iOS 7'],
                                }),
                            ]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:['url-loader?limit=10240&name-./images/[name].[ext]']
            },
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                options:{
                    'presets':['es2015','react','stage-0']
                }
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            title:'境内游',
            template:path.resolve(TEM_PATH,'index.html'),
            filename:'index.html',
            chunks:['app','reacts'],
            inject:'body'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'reacts',
            filename:'reacts.js'
        })
    ]
}