const path = require('path')
const { DefinePlugin } = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CompiledExtractPlugin } = require('@compiled/webpack-loader')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const babelOpts = require('./babel.config')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './index.tsx',
    context: path.resolve(__dirname, 'src/'),
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-source-map',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx?)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: babelOpts
            },
            {
                test: /\.(js|tsx?)$/,
                loader: '@compiled/webpack-loader',
                options: {
                    extract: true
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
        extensions: ['.js', '.ts', '.tsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: '../public/index.html'
        }),
        new DefinePlugin({
            'process.env': {
                PUBLIC_URL: '""'
            }
        }),
        new CompiledExtractPlugin(),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
    ],
    devServer: {
        historyApiFallback: true,
        client: {
            overlay: {
                warnings: false,
                errors: true
            }
        }
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin()
        ]
    }
}
