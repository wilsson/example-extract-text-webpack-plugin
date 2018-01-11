const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
     resolve: {
        extensions: ['.js'],
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
         new ExtractTextPlugin({
             filename: 'app.css',
             disable: false,
             allChunks: true
         }),
    ]
}