
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dirname = path.resolve(__dirname)

module.exports = {
    entry: {
        index: [ "./src/index.js" ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 给js css 图片等在html引入中添加前缀
        publicPath: "./",
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ 'css-loader', 'postcss-loader' ],
                })
            },
            {
                test: /\.less$/,
                // exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [ 'css-loader', 'postcss-loader', 'less-loader' ],
                })
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: "[name].[ext]",
                            publicPath: "./dist/images",
                            outputPath: "/dist/images"
                        }
                    }
                ],
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
          'components': dirname + '/src/components',
          'assets': dirname + '/src/assets',
          'configs': dirname + '/src/configs',
          'utils': dirname + '/src/utils',
          'pages': dirname + '/src/pages',
          'apis': dirname + '/src/apis'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin('style/[name].min.css'),
        new HtmlWebpackPlugin({
            hash: true,
            chunks: ['index'],
            template: "./src/pages/index.html",
            inject: 'body',
            filename: "index.html"
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new BundleAnalyzerPlugin(),
        new UglifyJSPlugin()
    ]
};
