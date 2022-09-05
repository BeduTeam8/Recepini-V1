const path = require("path");
const config = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
	mode: "production",
	output: {
		filename: "[name]-[contenthash]-bundle.js",
		path: path.resolve(__dirname, "../build"),
		assetModuleFilename: "images/[name]-[hash][ext][query]",
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name]-[contenthash]-bundle.css",
		}),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader, // 03 extract css into files

					"css-loader", // 02 Translates CSS into CommonJS

					"sass-loader", // 01 Compiles Sass to CSS
				],
			},
		],
	},
});
