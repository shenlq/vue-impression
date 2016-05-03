var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/main.js')
    },
    output: {
        path: path.join(__dirname, 'build', 'scripts'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        },{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        },{
            test: /\.(png|jpg|gif|jpeg)$/,
            loader: 'url'
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    }
};
