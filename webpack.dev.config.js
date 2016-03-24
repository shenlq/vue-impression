var path = require('path');
var webpack = require('webpack');
var projectRoot = path.resolve(__dirname, '../');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var PORT = 9012;

module.exports = {
    port: PORT,
    devtool: '#eval-source-map',
    entry: {
        app: [
        	'webpack-dev-server/client?http://localhost:' + PORT,
        	"webpack/hot/dev-server",
        	'./src/scripts/main.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
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
	        loader: 'babel',
	        include: projectRoot,
	        exclude: /node_modules/
	    },{
	        test: /\.json$/,
	        loader: 'json'
	    },{
	        test: /\.html$/,
	        loader: 'vue-html'
	    },{
	        test: /\.(png|jpg|gif|svg)$/,
	        loader: 'url',
	        query: {
	          	limit: 10000,
	          	name: '[name].[ext]?[hash:7]'
	        }
	    }]
    },
    plugins: [
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin(),
	    new HtmlWebpackPlugin({
	      	filename: './index.html',
	      	template: './index.html',
	      	inject: true
	    })
	    ]
};