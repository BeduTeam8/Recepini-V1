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
			template: "./src/index.html",
			chunks: ["main"], //agregarmos "vendor", antes de main cuando queremos cargar logica bootstrap
		}),
		new HtmlWebpackPlugin({
			filename: "design_system.html",
			template: "./src/design_system.html",
			chunks: ["main"], //agregarmos "vendor", antes de main cuando queremos cargar logica bootstrap
		}),
		new HtmlWebpackPlugin({
			filename: "recipe.html",
			template: "./src/recipe.html",
			chunks: ["main"], 
		}),
		new HtmlWebpackPlugin({
			filename: "search_results.html",
			template: "./src/search_results.html",
			chunks: ["main"], 
      	}),
      new HtmlWebpackPlugin({
			filename: "ingredient.html",
			template: "./src/ingredient.html",
			chunks: ["main"], //agregarmos "vendor", antes de main cuando queremos cargar logica bootstrap
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
