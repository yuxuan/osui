const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Initial',
      template: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [["import",  {libraryName: 'antd', libraryDirectory: 'es', style: true}]]
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars:{'ant-prefix': 'one-front'}
            }
          },
          {
            loader: 'style-resources-loader',
            options: {
                patterns:[
                  path.resolve(__dirname, 'node_modules/@osui/theme/dist/antd-vars-patch.less'),
                  path.resolve(__dirname, 'node_modules/@osui/theme/dist/less-function-overrides.less'),
                ],
            }
        }
        ],
      },
    ]
  }
};
