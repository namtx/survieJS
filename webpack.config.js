const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: path.resolve(ROOT_PATH, 'app/main.jsx'),
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
                include: path.resolve(ROOT_PATH, 'app'),
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: path.resolve(ROOT_PATH, 'app'),
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Kanban app',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
};
