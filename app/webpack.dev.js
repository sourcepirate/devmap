let baseConfig = require('./webpack.config');
let webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = Object.assign({}, baseConfig, {
    watch: true,
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ]
});