const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_, argv) => {
  const production = argv.mode === 'production';
  return {
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'assets/js/[name].[contenthash:8].js',
      publicPath: '/',
      clean: true,
    },
    resolve: { extensions: ['.js', '.jsx'] },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader', options: { configFile: path.resolve(__dirname, 'babel.config.json') } },
        },
        { test: /\.css$/, use: [production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader'] },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './public/index.html' }),
      new CopyWebpackPlugin({ patterns: [{ from: 'public', to: '.', globOptions: { ignore: ['**/index.html', '**/.gitkeep'] } }] }),
      ...(production ? [new MiniCssExtractPlugin({ filename: 'assets/css/[name].[contenthash:8].css' })] : []),
    ],
    devtool: production ? false : 'eval-cheap-module-source-map',
    devServer: {
      host: 'localhost',
      port: 3000,
      hot: true,
      historyApiFallback: true,
      static: { directory: path.resolve(__dirname, 'public') },
      proxy: [{ context: ['/api'], target: 'http://127.0.0.1:3001' }],
      client: { overlay: { errors: true, warnings: false } },
    },
    performance: { hints: production ? 'warning' : false },
  };
};
