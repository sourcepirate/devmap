let baseConfig = require('./webpack.config');
let webpack = require('webpack');
let CompressionPlugin = require("compression-webpack-plugin");
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
let OfflinePlugin = require('offline-plugin')

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
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'lib.js',
            minChunks(module, count) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
        new OfflinePlugin({
            afeToUseOptionalCaches: true,
            externals: ['/'],
            caches: 'all',
            publicPath: "/static/",
            ServiceWorker: {
                // publicPath: '/sw.js',
                events: true,
                // navigateFallbackURL: '/'
            },
            AppCache: {
                events: true
            }
        })
    ]
});