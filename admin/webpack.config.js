const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const environment = process.env.NODE_ENV;
const environmentConfiguration = require('./config/default.js')
environmentConfiguration.NODE_ENV = JSON.stringify(environment)
environmentConfiguration.constants.templatePrefix = JSON.stringify(
  path.join(__dirname, '/src/app/')
);

if (!environment) {
  throw 'Especifica un NODE_ENV';
}

const webpackConfig = {
  entry: [
    './src/app.module.js',
    './src/app/assets/css/sass/materialism.scss',
  ],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: './src/app/assets/[name].[hash:8].[ext]',
          publicPath: '/',
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.html$/,
        use: ['ngtemplate-loader', 'html-loader'],
        exclude: [path.resolve(__dirname, 'public', 'index.html')],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader?sourceMap', 'resolve-url-loader']),
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract([
          'css-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap',
        ]),
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
  },
  plugins: [
    new webpack.ProvidePlugin({}),
    new webpack.DefinePlugin({
      'process.env': environmentConfiguration.constants,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      favicon: './src/app/assets/img/favicon/favicon.ico',
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].[hash:8].css',
      allChunks: true,
    }),
    ...environmentConfiguration.plugins,
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = webpackConfig;
