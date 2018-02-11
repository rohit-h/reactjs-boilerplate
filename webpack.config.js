const webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(bower_components|node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(woff|woff2|eot|svg|ttf)$/,
                loader: 'url-loader'
            }
        ]
    },
    output: {
        path: './src',
        filename: 'main.min.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ],
};
