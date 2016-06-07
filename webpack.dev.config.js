var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    PORT = 9012;

module.exports = {
    port: PORT,
    devtool: '#eval-source-map',
    entry: {
        app: [
        	'webpack-dev-server/client?http://localhost:' + PORT,
        	"webpack/hot/dev-server",
        	'./src/main.js']
    },
    output: {
        path: __dirname,
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
	        include: path.join(__dirname, 'src'),
	        exclude: /node_modules/
	    },{
	    	test: /\.scss$/,
        	loaders: ["style", "css", "scss"]
	    },{
	        test: /\.json$/,
	        loader: 'json'
	    },{
	        test: /\.html$/,
	        loader: 'vue-html'
	    },{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url'
        }]
    },
    plugins: [
    	new webpack.optimize.OccurenceOrderPlugin(),
    	new webpack.HotModuleReplacementPlugin(),
    	new webpack.NoErrorsPlugin(),
	    new HtmlWebpackPlugin({
	      	filename: 'index.html',
	      	template: 'src/index.html',
	      	inject: true
	    })
	    ]
};