const path = require("path");

const config = require("./webpack.config");
const { merge } = require("webpack-merge");

module.exports = merge(config, {
	mode: "development",
	devServer: {
		static: "./build",
		hot: true,
	},
	output: {
		filename: "[name]-bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader", // 03 Creates `style` in DOM from JS strings

					"css-loader", // 02 Translates CSS into CommonJS

					"sass-loader", // 01 Compiles Sass to CSS
				],
			},
		],
	},
});
