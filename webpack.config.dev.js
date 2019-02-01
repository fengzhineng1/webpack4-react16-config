const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackDevServer = require("webpack-dev-server");
const dirname = path.resolve(__dirname);
const port = 8000;
module.exports = {
  mode: "development",
  entry: {
    index: [
      "webpack/hot/dev-server",
      "webpack-dev-server/client?http://localhost:" + port,
      "./src/index.tsx"
    ]
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    // 给js css 图片等在html引入中添加前缀
    publicPath: "/",
    filename: "js/[name].min.js"
  },

  devtool: "inline-source-map",

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
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"]
          }
        }
      },
      {
        test: /\.css$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"]
        })
      },
      {
        test: /\.less$/,
        // exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "less-loader"]
        })
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: "url-loader?limit=8192&name=img/[name].[ext]"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".jsx", ".tsx", ".ts"],
    alias: {
      components: dirname + "/src/components",
      assets: dirname + "/src/assets",
      configs: dirname + "/src/configs",
      utils: dirname + "/src/utils",
      pages: dirname + "/src/pages",
      apis: dirname + "/src/apis"
    }
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },

  plugins: [
    new ExtractTextPlugin({
      filename: "style/[name].min.css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      hash: true,
      chunks: ["index"],
      template: "./src/pages/index.html",
      inject: "body",
      filename: "index.html"
    }),

    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    hot: true,
    historyApiFallback: true,
    compress: true,
    inline: true,
    quiet: false,
    noInfo: true,
    port: port,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:8777",
        pathRewrite: { "^/api": "" },
        changeOrigin: true
      }
    },
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    },
    // contentBase不要直接指向pages，因为会导致css、js支援加载不到
    contentBase: __dirname + "/src/"
  }
};
