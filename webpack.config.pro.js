
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HappyPack = require('happypack');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const dirname = path.resolve(__dirname)

module.exports = {
    entry: {
        index: [ "./src/index.js" ]
    },
    optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /react|react-dom|react-router|react-router-dom/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
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
                    loader: 'happypack/loader?id=babel'
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
        // new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: 'style/[name].min.css',
            allChunks: true
        }),
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
        new UglifyJSPlugin(),
        new HappyPack({ // 基础参数设置
            id: 'babel', // 上面loader?后面指定的id
            loaders: [{
                loader: 'babel-loader',
                options: { babelrc: true, cacheDirectory: true },
                presets: ['@babel/preset-react']
            }], // 实际匹配处理的loader
            threadPool: happyThreadPool,
            // cache: true // 已被弃用
            verbose: true
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./dist/react.manifest.json')
        }),
        new HtmlIncludeAssetsPlugin({
            assets: ['./react.dll.js'], // 添加的资源相对html的路径
            append: false // false 在其他资源的之前添加 true 在其他资源之后添加
        })
    ]
};
