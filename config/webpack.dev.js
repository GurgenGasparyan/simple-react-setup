const path = require('path');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        port: 3001,
    },
    devtool: 'inline-source-map',
    plugins: [
        new WebpackManifestPlugin()
    ]
});