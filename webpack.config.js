'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    module: {
    /***************************************************
    *           Loaders Section
    ****************************************************/
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules!postcss'
            }
        ]
    },

    postcss: [
        require('autoprefixer')
    ],

    /***************************************************
    *           Plugins Section
    ****************************************************/

    plugins: [
        new HtmlWebpackPlugin({
                template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    /***************************************************
    *           Webpack Dev Server Config
    ****************************************************/
    devServer: {
    colors: true,
    historyApiFallback: true,
    port: process.env.PORT||8080,
    inline: true,
    hot: true
  }
}
