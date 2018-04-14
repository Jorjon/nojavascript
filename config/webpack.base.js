const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'html-imgwh-loader'
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                            doctype: 'html'
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                    // {
                    //     loader: 'sqip-loader',
                    //     options: {
                    //         numberOfPrimitives: 20,
                    //         skipPreviewIfBase64: true
                    //     }
                    // },
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: false,
                            mozjpeg: {
                                quality: 65
                            }
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.pug',
            minify: false,
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            }
        })
    ]
};