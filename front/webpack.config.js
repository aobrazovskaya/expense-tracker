const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

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
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				include: path.resolve(__dirname, 'src/asset/icons'),
				options: {
					extract: true,
					outputPath: '/'
				}
			}
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
		}),
		new SpriteLoaderPlugin({
			plainSprite: true
		})
	]
};