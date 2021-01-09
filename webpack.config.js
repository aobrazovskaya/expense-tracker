const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname, "build")
	},
	module: {
    rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		]
	},
	devServer: {
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};