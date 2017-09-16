const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "_build")
	},
	context: path.join(__dirname, ""),
	plugins: [
		new CopyWebpackPlugin([
			{ from: "static" }
		])
	]
};
