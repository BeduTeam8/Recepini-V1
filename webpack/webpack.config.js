const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js",
	},
	plugins: [
		// plugins section
		new HtmlWebpackPlugin({
			// template: "./src/index.html",
			template: "./src/design_system.html",
		}),
	],
	module: {
		rules: [
			// rules for modules (configure loaders, parser options, etc.)

			{
				// html loader
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				// image loader
				test: /\.(svg|png|jpe?g|jpg|gif)$/,
				type: "asset/resource",
			},
		],
	},
};
