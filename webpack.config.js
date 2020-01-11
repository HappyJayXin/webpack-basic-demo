const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const entry = {
  main: './src/main.js'
}

const output = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js'
}

const devServer = {
  contentBase: path.join(__dirname, 'src'),
  compress: true,
  port: 8080,
  open: true,
  hot: true
}

const optimization = {
  minimizer: [
    new TerserPlugin({
      cache: true,
      parallel: true,
      terserOptions: {
        output: {
          comments: false,
        }
      }
    })
  ]
}

const _module = {
  rules: [
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: {
            minimize: {
              removeComments: false,
              collapseWhitespace: false,
            },
          },
        },
      ],
    },
    {
      test: /\.css$/i,
      use: [
        'style-loader',
        'postcss-loader',
        'css-loader'
      ],
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: { importLoaders: 1 }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: 'postcss.config.js'
            }
          }
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'assets/',
            esModule: false
          }
        },
      ],
    }
  ]
}

const plugins = [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: __dirname + '/src/index.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
    }
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].css'
  }),
  new CleanWebpackPlugin()
]

module.exports = {
  entry,
  output,
  devServer,
  optimization,
  module: _module,
  plugins
}
