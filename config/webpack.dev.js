const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base');
module.exports = merge(base, {
    output: {
        filename: 'index.js',
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        hot: true,
        port: 9000,
        historyApiFallback: true,
        open: false
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use:
                    [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: {path: path.join(__dirname, '/postcss.config.js')}
                            }
                        }
                    ]
            }
        ]
    }
});