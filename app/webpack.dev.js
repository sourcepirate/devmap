let baseConfig = require('./webpack.config');
let webpack = require('webpack');
let CompressionPlugin = require("compression-webpack-plugin");
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let ManifestPlugin = require('webpack-manifest-plugin');
// let CopyWebpackPlugin = require('copy-webpack-plugin');

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
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'lib.js',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: '/build/',
            cache: {
                "name": "DevMap",
                "short_name": "DevMap",
                "start_url": ".",
                "display": "standalone",
                "background_color": "#fff",
                "description": "Maintain a mind map"
            }
        })
    ]
});
