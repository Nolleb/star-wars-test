const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let config = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./public"),
		filename: "./bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: "sass-loader",
					},
					"postcss-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: "file-loader",
					},
				],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
	resolve: {
		extensions: [".js", ".jsx", ".scss"],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "./public"),
		publicPath: "/",
		historyApiFallback: true,
		inline: true,
		open: true,
		hot: true,
	},
	devtool: "eval-source-map",
};

module.exports = config;
