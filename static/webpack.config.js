const path = require('path');

module.exports = {
    mode: "production",
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    target:["web", "es5"],
    module: {
        rules: [
			{
			  test: /\.js$/,
			  enforce: "pre",
			  use: ["source-map-loader"],
			},
			{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    }
};
