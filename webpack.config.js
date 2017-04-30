var webpack = require("webpack");
var src      = './src/';
var build    = './build/';

module.exports = {
    devServer: {
        contentBase: build,
        port: 3000
    },
    entry: {
        index: src + 'js/index.js',
        common: src + 'js/common.js'
    },
    output: {
        filename: '[name].bundle.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }}),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};